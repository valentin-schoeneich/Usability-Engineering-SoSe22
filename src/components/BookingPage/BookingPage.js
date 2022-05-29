import "./Bookingpage.css"
import React from 'react';
import {Container, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import paypalIcon from "../../imgs/BookingPage/Paypal.png";
import kreditkarteIcon from "../../imgs/BookingPage/Kreditkarte.png";
import barIcon from "../../imgs/BookingPage/Bargeld.png";

function refreshPaymentMethode(){
    document.getElementById("Zahlungsart").textContent = document.querySelector('input[name="zahlungsart"]:checked').value;
}

const BookingPage = props => {

    return (
        <Container>
            <h1>Letzter Schritt zum Auto</h1>
            <Form>
                <Form.Group className="group">
                    <Form.Label htmlFor="forename">Vorname</Form.Label>
                    <Form.Control id="forename" name="forename" required/>
                </Form.Group>
                <Form.Group className="group">
                    <Form.Label htmlFor="surname">Nachname</Form.Label>
                    <Form.Control id="surname" name="surname" required/>
                </Form.Group>
                <Form.Group className="group">
                    <Form.Label htmlFor="email">E-Mail Adresse</Form.Label>
                    <Form.Control type="email" id="email" name="email" required/>
                </Form.Group>
                <Form.Group className="group">
                    <Form.Label>Zahlungsart</Form.Label>
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
                </Form.Group>

                <hr/>

                <h3>Zusammenfassung</h3>
                <h4>Ihre Auswahl</h4>
                <p>
                    S-Klasse Mercedes für den Zeitraum 04.05.2022 - 17.05.2022
                </p>
                <h4>Kosten</h4>
                <div>
                    5 Tage je 50€<br/>
                    Kaution: 100€<br/>
                    <strong>Gesammtpreis (Inkl. Kaution): 350€</strong> <span id="Zahlungsart">Zahlungsart noch zu wählen</span>
                </div>

                <Button variant="primary" type="submit">
                    Zahlungspflichtig Buchen
                </Button>
                <Button variant="danger" type="button">
                    Abbrechen
                </Button>
            </Form>
        </Container>
    );
}

export default BookingPage;