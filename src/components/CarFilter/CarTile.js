import React from 'react';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useParams} from "react-router-dom";


const CarTile = props => {


    const { location, startDate, endDate } = useParams();

    return (
        <>
            <Card style={{ width: '40rem' }}>
                <Card.Header>{props.car.details.brand + " " + props.car.details.model}</Card.Header>
                <Card.Body>
                    Details<br/>
                    Sitze {props.car.details.seats}<br/>
                    Türen {props.car.details.doors}<br/>
                    Getriebe {props.car.details.gearbox}<br/>
                    ...<br/>
                    <Button href={"/detailPage/" + props.car.id+ "/" + startDate + "/" + endDate}>Auswählen</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default CarTile;