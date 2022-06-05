import React,  { useState } from 'react';
import {Card, Collapse, Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";


const FilterSectionWithCards = props => {
    const [openFilterSection, setOpenFilterSection] = useState(false);
    const [selected, setSelected] = useState(props.selectedNames);
    let cards = [];

    const switchSelected = (selectedName) => {
        setSelected( {...selected, [selectedName]: !selected[selectedName]});
    }

    const handleFilterClick = event => {
        let selectedName = event.target.getAttribute("name");
        let flippedSelected = !selected[selectedName];
        switchSelected(selectedName);
        if(flippedSelected){
            props.setFiltersState(props.dataKey, selectedName);
        } else {
            props.setFiltersState(props.dataKey, selectedName, true);
        }
    }


    return (
        <>
            <Card style={{ width: '30rem' }}>
                <Card.Header
                    onClick={() => setOpenFilterSection(!openFilterSection)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openFilterSection}
                    style={{textAlign: 'right'}}
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

export default FilterSectionWithCards;