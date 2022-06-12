import React from 'react';
import {Card} from "react-bootstrap";


const CarTile = props => {


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
                </Card.Body>
            </Card>
        </>
    );
}

export default CarTile;