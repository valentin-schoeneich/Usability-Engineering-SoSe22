import React from 'react';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useParams} from "react-router-dom";
import tick from "../../imgs/hasDetail.png"
import cross from "../../imgs/didntHasDetail.png"
import Sitze from "../../imgs/sitze.png";
import Tueren from "../../imgs/tueren.png";
import Automatik from "../../imgs/automatik.png";
import Manuell from "../../imgs/manuell.png";
import Klimaanlage from "../../imgs/Klimaanlage.png";
import Navigation from "../../imgs/navigation.png";
import Infotainment from "../../imgs/infotainment.png";


const CarTile = props => {


    const { location, startDate, endDate } = useParams();

    return (
        <>
            <Card style={{ width: '40rem' }}>
                <Card.Header>
                    {props.car.details.class + " " + props.car.details.brand + " " + props.car.details.model}
                </Card.Header>
                <Card.Body>
                    <div style={{float: "left", paddingLeft: "2rem"}}>
                        <img src={props.car.img} style={{height: "150px"}}/>
                    </div>
                    <div style={{float: "right", paddingRight: "2rem"}}>
                        {props.car.protectionServices.fullyComprehensiveInsurance
                            ? <img src={tick} style={{height: "20px"}}/>
                            : <img src={cross} style={{height: "20px"}}/>}
                            {" Vollkaskoversicherung"}<br/>
                        {props.car.protectionServices.glassTireProtection
                            ? <img src={tick} style={{height: "20px"}}/>
                            : <img src={cross} style={{height: "20px"}}/>}
                            {" Glas- und Reifenschutz"}<br/>
                        {props.car.protectionServices.underbodyProtection
                            ? <img src={tick} style={{height: "20px"}}/>
                            : <img src={cross} style={{height: "20px"}}/>}
                            {" Unterbodenschutz"}<br/>
                        {props.car.deposit
                            ? <img src={tick} style={{height: "20px"}}/>
                            : <img src={cross} style={{height: "20px"}}/>}
                            {" Kaution: " + props.car.deposit + "€"}<br/>

                        <span className="img-with-text" style={{verticalAlign: "top", display: "inline-block", textAlign: "center", width: "50px"}}>
                            <img src={Sitze} style={{height: "20px"}}/>
                            <span style={{display: "block", fontSize: "12px"}}>{props.car.details.seats}</span>
                        </span>
                        <span className="img-with-text" style={{verticalAlign: "top", display: "inline-block", textAlign: "center", width: "50px"}}>
                            <img src={Tueren} style={{height: "20px"}}/>
                            <span style={{display: "block", fontSize: "12px"}}>{props.car.details.doors}</span>
                        </span>
                        <span className="img-with-text" style={{verticalAlign: "top", display: "inline-block", textAlign: "center", width: "50px"}}>
                            <img src={props.car.details.gearbox === "Automatik" ? Automatik: Manuell}  style={{height: "20px"}}/>
                            <span style={{display: "block", fontSize: "12px"}}>{props.car.details.gearbox}</span>
                        </span>
                        <span className="img-with-text" style={{display: "inline-block", width: "50px"}}>
                            {props.car.details.aircon ? <img src={Klimaanlage} style={{height: "20px"}}/> : ""}
                        </span>
                        <span className="img-with-text" style={{display: "inline-block", width: "50px"}}>
                            {props.car.details.aircon ? <img src={Navigation} style={{height: "20px"}}/> : ""}
                        </span>
                        <span className="img-with-text" style={{display: "inline-block", width: "50px"}}>
                            {props.car.details.aircon ? <img src={Infotainment} style={{height: "20px"}}/> : ""}
                        </span>
                    </div>

                </Card.Body>
                <Card.Footer>
                    <span style={{fontSize: "2rem"}}>{props.car.pricePerDay + "€"}</span> <span>pro Tag</span>
                    <Button
                        href={"/detailPage/" + props.car.id + "/" + startDate + "/" + endDate}
                        style={{float: "right"}}
                    >
                        Auswählen
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
}

export default CarTile;