import React,  { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import LoginButton from "./LoginRegistration/LoginButton";
import RegistrationButton from "./LoginRegistration/RegistrationButton";
import carlogo from "../imgs/rent-a-car.png";

const Navigator = props => {
    const [accountData, setAccountData] = useState(JSON.parse(window.localStorage.getItem("accountData")));

    const handleLogin = account => {
        window.localStorage.setItem("accountData", JSON.stringify(account));
        setAccountData(JSON.parse(window.localStorage.getItem("accountData")));
    }

    const handleSelect = event => {
        if(event === "1"){
            handleLogin({});
            window.location.reload(true);
        }
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{position: "sticky", top: 0, zIndex: 100}}>
                <Container>
                    <a href="/">
                        <img src={carlogo} style={{
                        resizeMode: "stretch",
                        height: 50,
                        width: 100
                        }} href="/" alt="car-img"></img>
                    </a>
                    <Nav className="me-auto"/>
                    {accountData === null || Object.keys(accountData).length === 0
                        ? <>
                            <LoginButton onLogin={handleLogin}/>
                            <Navbar.Text>|</Navbar.Text>
                            <RegistrationButton/>
                        </>
                        : <>
                            <NavDropdown title={JSON.parse(window.localStorage.getItem("accountData")).forename
                                        + " " + JSON.parse(window.localStorage.getItem("accountData")).surname}
                            onSelect={handleSelect}>
                                <NavDropdown.Item eventKey="0" href="/myAccount">Mein Konto</NavDropdown.Item>
                                <NavDropdown.Item eventKey="1" href="/">Abmelden</NavDropdown.Item>
                            </NavDropdown>
                        </>
                        }
                </Container>
            </Navbar>
        </>
    );
}

export default Navigator;