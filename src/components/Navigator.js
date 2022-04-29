import React,  { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';


const Navigator = props => {
    const [show, toggleShow] = useState(true);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Rent-a-car</Navbar.Brand>
                    {/*<Nav className="me-auto">
                        <Nav.Link href="">Auto mieten</Nav.Link>
                    </Nav>*/}
                </Container>
            </Navbar>
        </>
    );
}

export default Navigator;