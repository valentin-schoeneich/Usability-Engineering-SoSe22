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
                        <Card border={selected[props.selectedNames[index]] ? "dark" : ""} style={{ width: "8rem", margin: "1rem", fontSize: "10px", hover: "pointer"}}
                              onClick={handleFilterClick} name={props.selectedNames[index]}  >
                            {/*<Card.Header name={props.selectedNames[index]}>{name}</Card.Header>*/}
                            <Card.Img src={props.imgs ? props.imgs[index] : ""} alt={name + " Image"} style={{width: props.dataKey==="class" ? "50%": "25%", display: "block",
                                marginLeft: "auto", marginRight: "auto"}} name={props.selectedNames[index]} />
                            <Card.Body name={props.selectedNames[index]} style={{height: "1rem", display: "block",
                                marginLeft: "auto", marginRight: "auto", paddingTop: "1px"}} >
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