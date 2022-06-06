import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import Homepage from "./Homepage";
import React, { Component }  from 'react';
const CarSuggestions = props => {
    const handleRent = event => {
        window.location.href = "http://localhost:3000/"+props.carData?props.carData.id:"";
    }
    return (
        <Card id="card" onClick={handleRent}>
            <Card.Img variant="top" src={props.carData?props.carData.img:""}
                      onClick={handleRent}/>
            <Card.Body>
                <Card.Title>Nur {props.carData?props.carData.pricePerDay:""} € pro Tag</Card.Title>
                <div>
                    {props.carData?props.carData.details.brand:""} {props.carData?props.carData.details.model:""}
                </div>
                <p></p>
                <div>
                    <Button variant="primary" onClick={handleRent}>Jetzt Mieten</Button>
                </div>

            </Card.Body>
        </Card>
    );
}
export default CarSuggestions;