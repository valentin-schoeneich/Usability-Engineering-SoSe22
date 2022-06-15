import "./Bookingpage.css"
import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import paypalIcon from "../../imgs/BookingPage/Paypal.png";
import kreditkarteIcon from "../../imgs/BookingPage/Kreditkarte.png";
import barIcon from "../../imgs/BookingPage/Bargeld.png";
import {useState} from 'react';
import AbortPopup from "./AbortPopup";
import SuccessPopup from "./SuccessPopup";
import {useParams} from "react-router-dom";
import successPopup from "./SuccessPopup";

function refreshPaymentMethode(){
    document.getElementById("Zahlungsart").textContent = document.querySelector('input[name="zahlungsart"]:checked').value;
}

function onLoad(){
    let pricePerDay = parseFloat(carInfo.pricePerDay);
    document.getElementById("pricePerDay").textContent = pricePerDay + "";
    let deposit = parseFloat(carInfo.deposit);
    document.getElementById("deposit").textContent = deposit + "";

    let from = new Date(start);
    let to = new Date(end);

    document.getElementById("from").textContent = from.toLocaleDateString("de-DE")
    document.getElementById("to").textContent = to.toLocaleDateString("de-DE")

    let days = ((to-from)/1000/60/60/24)+1;
    document.getElementById("days").textContent = days;

    document.getElementById("finalPrice").textContent = (pricePerDay * days + deposit)+ "";


    document.getElementById("modelBrand").textContent = carInfo.details.model + " " +carInfo.details.brand;


    let form = document.getElementById('my-form');
    if (form.attachEvent) {
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
    }
}

function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    window.localStorage.setItem("showSuccessPopup", "true")
    window.location.href="/";
    return false;
}

const originalSetItem = localStorage.setItem;

localStorage.setItem = function(key, value) {
    const event = new Event('itemInserted');

    event.value = value; // Optional..
    event.key = key; // Optional..

    if(key === "accountData"){
        document.dispatchEvent(event);
    }

    originalSetItem.apply(this, arguments);
};

const localStorageSetHandler = function(e) {
    window.location.reload();
};

document.addEventListener("itemInserted", localStorageSetHandler, false);

let carsData;
let carInfo;
let start;
let end;


const BookingPage = props => {

    const [abortPopUp, setAbortPopUp] = useState(false);


    const switchAbortPopUp = () => {
        setAbortPopUp(show => !show);
    }

    [carsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));

    const [accountData] = useState(JSON.parse(window.localStorage.getItem("accountData")));

    console.log(accountData);

    const {id, startDate, endDate} = useParams();

    start = startDate;
    end = endDate;

    carInfo = carsData.find(car => car.id.toString() === id);

    return (
        <Container onLoad={onLoad}>
            <h1>Letzter Schritt zum Auto</h1>
            <Form id={"my-form"}>
                {(accountData === null || Object.keys(accountData).length === 0) ?
                    <div>
                    <Form.Group className="mb-3" as={Row} >
                        <Col sm={3} md={5} lg={3}>
                            <Form.Label htmlFor="forename">Vorname</Form.Label>
                        </Col>
                        <Col sm={9} md={7} lg={9}>
                            <Form.Control id="forename" name="forename" required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Col sm={3} md={5} lg={3}>
                            <Form.Label htmlFor="surname">Nachname</Form.Label>
                        </Col>
                        <Col sm={9} md={7} lg={9}>
                            <Form.Control id="surname" name="surname" required/>
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Row}>
                        <Col sm={3} md={5} lg={3}>
                            <Form.Label  htmlFor="email">E-Mail Adresse</Form.Label>
                        </Col>
                        <Col sm={9} md={7} lg={9}>
                            <Form.Control  type="email" id="email" name="email" required/>
                        </Col>
                    </Form.Group>
                    </div>
                    : null}
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={3} md={5} lg={3}>Zahlungsart</Form.Label>
                    <Col sm={9} md={7} lg={9}>
                        <Form.Check type="radio">
                            <Form.Check.Input onClick={refreshPaymentMethode} id="paypal" name="zahlungsart" type="radio" value={"via Paypal"} required/>
                            <Form.Check.Label htmlFor="paypal"><img src={paypalIcon} className={"icon"} alt="paypal"/> Paypal</Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio">
                            <Form.Check.Input onClick={refreshPaymentMethode} id="kreditkarte" name="zahlungsart" type="radio" value={"via Kreditkarte"}/>
                            <Form.Check.Label htmlFor="kreditkarte"><img src={kreditkarteIcon} className={"icon"} alt="kreditkarte"/> Kreditkarte</Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio">
                            <Form.Check.Input onClick={refreshPaymentMethode} id="bar" name="zahlungsart" type="radio" value={"in Bar bei Abholung"}/>
                            <Form.Check.Label htmlFor="Barzahlung"><img src={barIcon} className={"icon"} alt="Barzahlung"/> Bar bei Abholung</Form.Check.Label>
                        </Form.Check>
                    </Col>
                </Form.Group>

                <hr style={{height: "3px"}}/>

                <h3>Zusammenfassung</h3>
                <p><strong>Das Auto:</strong> <span id={"modelBrand"}/> von <span id={"from"}/> bis <span id={"to"}/></p>

                <div>
                    <strong>Gesammtpreis (Inkl. Kaution): <span id={"finalPrice"}/>€</strong> <span id="Zahlungsart">Zahlungsart noch zu wählen</span>
                    <ul>
                        <li><span id={"days"}/> Tage je <span id={"pricePerDay"}/>€</li>
                        <li>Kaution: <span id={"deposit"}/>€</li>
                    </ul>

                </div>

                <Button variant="primary" type="submit" id={"submit"}>
                    Zahlungspflichtig Buchen
                </Button>

                <Button variant="danger" type="button" onClick={switchAbortPopUp}>
                    Abbrechen
                </Button>
                {abortPopUp
                    ? <AbortPopup showPopUp={abortPopUp} switchPopUp={switchAbortPopUp}/>
                    : null}
            </Form>
        </Container>
    );
}

export default BookingPage;