import React,  { useState } from 'react';
import {Card, Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";


const FilterCards = props => {
    const [selected, setSelected] = useState(props.selected);
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
            {props.names ? props.names.forEach((name, index) =>{
                cards.push(
                    <Col key={index}>
                        <Card border={selected[props.selectedNames[index]] ? "dark" : ""} style={{ width: '10rem' }} onClick={handleFilterClick} >
                            <Card.Header name={props.selectedNames[index]}>{name}</Card.Header>
                            <Card.Body name={props.selectedNames[index]}>
                                {name}
                            </Card.Body>
                        </Card>
                    </Col>
                );
            }) : ""}
            {props.groupCards ? cards : <Container><Row>{cards}</Row></Container>}
        </>
    );
}

export default FilterCards;