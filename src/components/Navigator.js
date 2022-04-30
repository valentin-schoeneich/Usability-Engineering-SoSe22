import React,  { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import LoginPopUp from "./LoginPopUp";


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
                    <Navbar.Brand href="/">Rent-a-car</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="">Auto mieten</Nav.Link>
                    </Nav>
                    <Button variant="link" onClick={switchLoginPopUp}>Login</Button>
                    {loginPopUp
                        ? <LoginPopUp showPopUp={loginPopUp} switchPopUp={switchLoginPopUp}
                                 uuid={props.uuid} pid={props.pid} perf={props.perf}/>
                        : null}
                    <Navbar.Text>|</Navbar.Text>
                    <Button variant="link" onClick={switchRegistrationPopUp}>Registierung</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigator;