import React,  { useState } from 'react';
import {Card, Collapse, Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";


const ClassFilter = props => {
    const [openCarclass, setOpenCarclass] = useState(false);


    const handleClickCarclass = event => {
        let carclass = event.target.getAttribute("name");
        props.setFiltersState("class", carclass);
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
                                        <Card style={{ width: '10rem' }} onClick={handleClickCarclass} >
                                            <Card.Header name="Sportwagen">Sportwagen Bild</Card.Header>
                                            <Card.Body name="Sportwagen">
                                                Sportwagen
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '10rem' }} onClick={handleClickCarclass} >
                                            <Card.Header name="Oberklasse">Oberklasse Bild</Card.Header>
                                            <Card.Body name="Oberklasse">
                                                Oberklasse
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '10rem' }} onClick={handleClickCarclass}>
                                            <Card.Header  name="Mittelklasse">Mittelklasse Bild</Card.Header>
                                            <Card.Body  name="Mittelklasse">
                                                Mittelklasse
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card style={{ width: '10rem' }} onClick={handleClickCarclass} >
                                            <Card.Header name="Kompaktklasse">Kompaktklasse Bild</Card.Header>
                                            <Card.Body name="Kompaktklasse">
                                                Kompaktklasse
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

export default ClassFilter;