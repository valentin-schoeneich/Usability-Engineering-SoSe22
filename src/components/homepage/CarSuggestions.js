import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import Homepage from "./Homepage";

const CarSuggestions = props => {
    const handleRent = event => {

    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.carData?props.carData.img:""}
                      onClick={handleRent}/>
            <Card.Body>
                <Card.Title>{props.carData?props.carData.details.brand:""}</Card.Title>
                <Button variant="primary" onClick={handleRent}>Jetzt Mieten</Button>
            </Card.Body>
        </Card>
    );
}
export default CarSuggestions;