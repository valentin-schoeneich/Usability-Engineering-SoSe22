import React, {useState, useEffect} from 'react';
import {Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";


const Homepage = props => {
    const [accountData, setAccountData] = useState(JSON.parse(window.localStorage.getItem("accountData")));

    useEffect(() => {
        setAccountData(JSON.parse(window.localStorage.getItem("accountData")));
    }, []);

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <h1 style={{textAlign: "center"}}>Kontoinformationen</h1>
                    </Col>
                </Row>
                <br/><br/>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        {"Vorname"}<br/>
                        {"Nachname"}<br/>
                        {"Geschlecht"}<br/>
                        {"Geburtsdatum"}<br/>
                        {"E-Mail Adresse"}<br/>
                    </Col>
                    <Col xs lg="2">
                        {accountData.forename}<br/>
                        {accountData.surname}<br/>
                        {accountData.gender}<br/>
                        {accountData.birthdate}<br/>
                        {accountData.email}<br/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homepage;