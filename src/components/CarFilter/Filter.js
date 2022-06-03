import React,  { useState } from 'react';
import {Card, Collapse, Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";


const ClassFilter = props => {
    const [openFilterSection, setOpenFilterSection] = useState(false);
    const [selected, setSelected] = useState(props.selectedNames);
    let cards = [];

    const switchSelected = (carclass) => {
        setSelected( {...selected, [carclass]: !selected[carclass]});
    }

    const handleFilterClick = event => {
        let carclass = event.target.getAttribute("name");
        let flippedSelected = !selected[carclass];
        switchSelected(carclass);
        if(flippedSelected){
            props.setFiltersState(props.dataKey, carclass);
        } else {
            props.setFiltersState(props.dataKey, "");
        }
    }


    return (
        <>
            <Card style={{ width: '30rem' }}>
                <Card.Header
                    onClick={() => setOpenFilterSection(!openFilterSection)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openFilterSection}
                >
                    {props.filterName} {openFilterSection ? " ᐱ" : " ᐯ"}
                </Card.Header>

                <Collapse in={openFilterSection}>
                    <div id="example-collapse-text">
                        <Container>
                            <Row>
                                {props.names.forEach((name, index) =>{
                                    cards.push(
                                        <Col key={index}>
                                            <Card border={selected[name] ? "dark" : ""} style={{ width: '10rem' }} onClick={handleFilterClick} >
                                                <Card.Header name={name}>{name}</Card.Header>
                                                <Card.Body name={name}>
                                                    {name}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    );
                                })}
                                {cards}
                            </Row>
                        </Container>
                    </div>
                </Collapse>
            </Card>
        </>
    );
}

export default ClassFilter;