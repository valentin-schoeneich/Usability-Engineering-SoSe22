import React,  { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import LoginPopUp from "./LoginPopUp";
import RegistrationPopUp from "./RegistrationPopUp";
import carlogo from "../imgs/rent-a-car.png";

const Navigator = props => {
    const [loginPopUp, setLoginPopUp] = useState(false);
    const [registrationPopUp, setRegistrationPopUp] = useState(false);

    const switchLoginPopUp = () => {
        setLoginPopUp(show => !show);
    }

    const switchRegistrationPopUp = () => {
        setRegistrationPopUp(show => !show);
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <a href="/">
                        <img src={carlogo} style={{
                        resizeMode: "stretch",
                        height: 50,
                        width: 100
                        }} href="/"></img>
                    </a>
                    <Nav className="me-auto">
                        <Nav.Link href="">Auto mieten</Nav.Link>
                    </Nav>
                    <Button variant="link" onClick={switchLoginPopUp}>Login</Button>
                    {loginPopUp
                        ? <LoginPopUp showPopUp={loginPopUp} switchPopUp={switchLoginPopUp}/>
                        : null}
                    <Navbar.Text>|</Navbar.Text>
                    <Button variant="link" onClick={switchRegistrationPopUp}>Registierung</Button>
                    {registrationPopUp
                        ? <RegistrationPopUp showPopUp={registrationPopUp} switchPopUp={switchRegistrationPopUp}/>
                        : null}
                </Container>
            </Navbar>
        </>
    );
}

export default Navigator;