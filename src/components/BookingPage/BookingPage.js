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

function refreshPaymentMethode(){
    document.getElementById("Zahlungsart").textContent = document.querySelector('input[name="zahlungsart"]:checked').value;
}

const BookingPage = props => {

    const [abortPopUp, setAbortPopUp] = useState(false);
    const [successPopUp, setSuccessPopUp] = useState(false);

    const switchAbortPopUp = () => {
        setAbortPopUp(show => !show);
    }

    const switchSuccessPopUp = () => {
        setSuccessPopUp(show => !show);
    }

    return (
        <Container>
            <h1>Letzter Schritt zum Auto</h1>
            <Form onSubmit={switchSuccessPopUp}>
                <Form.Group className="mb-3" as={Row} >
                    <Form.Label column sm={3} md={5} lg={3} htmlFor="forename">Vorname</Form.Label>
                    <Col>
                        <Form.Control column sm={9} md={7} lg={9} id="forename" name="forename" required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={3} md={5} lg={3} htmlFor="surname">Nachname</Form.Label>
                    <Col>
                        <Form.Control column sm={9} md={7} lg={9} id="surname" name="surname" required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={3} md={5} lg={3} htmlFor="email">E-Mail Adresse</Form.Label>
                    <Col>
                        <Form.Control column sm={9} md={7} lg={9} type="email" id="email" name="email" required/>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={3} md={5} lg={3}>Zahlungsart</Form.Label>
                    <Col sm={9} md={7} lg={9}>
                        <Form.Check type="radio">
                            <Form.Check.Input onClick={refreshPaymentMethode} id="paypal" name="zahlungsart" type="radio" value={"via Paypal"} required/>
                            <Form.Check.Label htmlFor="paypal"><img src={paypalIcon} className={"icon"}/> Paypal</Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio">
                            <Form.Check.Input onClick={refreshPaymentMethode} id="kreditkarte" name="zahlungsart" type="radio" value={"via Kreditkarte"}/>
                            <Form.Check.Label htmlFor="kreditkarte"><img src={kreditkarteIcon} className={"icon"}/> Kreditkarte</Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio">
                            <Form.Check.Input onClick={refreshPaymentMethode} id="bar" name="zahlungsart" type="radio" value={"in Bar bei Abholung"}/>
                            <Form.Check.Label htmlFor="bar"><img src={barIcon} className={"icon"}/> Bar bei Abholung</Form.Check.Label>
                        </Form.Check>
                    </Col>
                </Form.Group>

                <hr/>

                <h3>Zusammenfassung</h3>
                <p></p>
                <p><strong>Das Auto:</strong> S-Klasse Mercedes von 04.05.2022 bis 17.05.2022</p>

                <div>
                    <strong>Gesammtpreis (Inkl. Kaution): 350€</strong> <span id="Zahlungsart">Zahlungsart noch zu wählen</span>
                    <ul>
                        <li>5 Tage je 50€</li>
                        <li>Kaution: 100€</li>
                    </ul>

                </div>

                <Button variant="primary" type="submit" id={"submit"}>
                    Zahlungspflichtig Buchen
                </Button>
                {successPopUp
                    ? <SuccessPopup showPopUp={successPopUp} switchPopUp={switchSuccessPopUp}/>
                    : null}
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