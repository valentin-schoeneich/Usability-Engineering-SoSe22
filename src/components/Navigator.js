import React,  { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import LoginButton from "./LoginRegistration/LoginButton";
import RegistrationButton from "./LoginRegistration/RegistrationButton";


const Navigator = props => {
    const [accountData, setAccountData] = useState({});

    const handleLogin = account => {
        setAccountData(account);
    }
//<Navbar.Text>{accountData.forename + " " + accountData.surname}</Navbar.Text>
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
                            <NavDropdown title={accountData.forename + " " + accountData.surname}>
                                <NavDropdown.Item href="/">Profil</NavDropdown.Item>
                                <NavDropdown.Item href="/">Abmelden</NavDropdown.Item>
                            </NavDropdown>
                        </>
                        }
                </Container>
            </Navbar>
        </>
    );
}

export default Navigator;