import React,  { useState } from 'react';
import {Card, Collapse, Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";


const Filter = props => {
    const [carsData, setCarsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));
    const [openCarclass, setOpenCarclass] = useState(false);


    const handleClickCarclass = event => {
        let carclass = event.target.innerText;
        debugger
    }


    return (
        <>
            <Card style={{ width: '30rem' }}>
                <Card.Header
                    onClick={() => setOpenCarclass(!openCarclass)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openCarclass}
                >
                    Fahrzeugklasse {openCarclass ? " ᐱ" : " ᐯ"}
                </Card.Header>

                    <Collapse in={openCarclass}>
                        <div id="example-collapse-text">
                            <Container>
                                <Row>
                                    <Col>
                                        <Card style={{ width: '10rem' }} onClick={handleClickCarclass} name="Sportwagen">
                                            <Card.Header>Sportwagen Bild</Card.Header>
                                            <Card.Body>
                                                Sportwagen
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '10rem' }} onClick={handleClickCarclass} name="Oberklasse">
                                            <Card.Header>Oberklasse Bild</Card.Header>
                                            <Card.Body>
                                                Oberklasse
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '10rem' }} onClick={handleClickCarclass} name="Mittelklasse">
                                            <Card.Header>Mittelklasse Bild</Card.Header>
                                            <Card.Body>
                                                Mittelklasse
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '10rem' }} onClick={handleClickCarclass} name="Kompaktklasse">
                                            <Card.Header>Mittelklasse Bild</Card.Header>
                                            <Card.Body>
                                                Mittelklasse
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Collapse>

            </Card>
         </>
    );
}

export default Filter;