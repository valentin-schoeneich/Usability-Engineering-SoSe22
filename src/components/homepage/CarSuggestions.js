import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import {useEffect, useState} from "react";
//import Homepage from "./Homepage";
const CarSuggestions = props => {

    const handleRent = event => {
        window.location.href= "/detailPage/" + props.carData.id + "/2022-07-18/2022-07-18";
    }

    return (
        <Card id="card" onClick={handleRent}>
            <div style={{display: "flex",
                alignItems: "center",
                justifyContent: "center", minHeight:"20rem"}}>
                <Card.Img variant="top" src={props.carData?props.carData.img:""}
                          onClick={handleRent} style={{marginLeft:"1rem", marginRight:"1rem"}}/>
            </div>
            <Card.Body>
                <Card.Title> <b>{props.carData?props.carData.pricePerDay:""} €</b> pro Tag</Card.Title>
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