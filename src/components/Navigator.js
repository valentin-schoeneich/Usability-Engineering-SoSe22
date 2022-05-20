import React,  { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import LoginButton from "./LoginRegistration/LoginButton";
import RegistrationButton from "./LoginRegistration/RegistrationButton";


const Navigator = props => {
    const [accountData, setAccountData] = useState(JSON.parse(window.localStorage.getItem("accountData")));

    const handleLogin = account => {
        window.localStorage.setItem("accountData", JSON.stringify(account));
        setAccountData(JSON.parse(window.localStorage.getItem("accountData")));
    }

    const handleSelect = event => {
        if(event === "1"){
            handleLogin({});
        }
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container>

                    <Navbar.Brand href="/">Rent-a-car</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="">Auto mieten</Nav.Link>
                    </Nav>
                    {Object.keys(accountData).length === 0
                        ? <>
                            <LoginButton onLogin={handleLogin}/>
                            <Navbar.Text>|</Navbar.Text>
                            <RegistrationButton/>
                        </>
                        : <>
                            <NavDropdown title={JSON.parse(window.localStorage.getItem("accountData")).forename
                                        + " " + JSON.parse(window.localStorage.getItem("accountData")).surname}
                            onSelect={handleSelect}>
                                <NavDropdown.Item eventKey="0" href="/">Profil</NavDropdown.Item>
                                <NavDropdown.Item eventKey="1">Abmelden</NavDropdown.Item>
                            </NavDropdown>
                        </>
                        }
                </Container>
            </Navbar>
        </>
    );
}

export default Navigator;

//<Navbar.Text>{accountData.forename + " " + accountData.surname}</Navbar.Text>
//Object.keys(accountData).length === 0