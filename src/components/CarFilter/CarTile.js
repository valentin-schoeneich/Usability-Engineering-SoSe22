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
    const { startDate, endDate } = useParams();

    const calcuateRentDays = () => {
        let from = new Date(startDate);
        let to = new Date(endDate);
        let days = ((to - from) / 1000 / 60 / 60 / 24) + 1;
        return days;
    }

    const calculatePrice = () => {
        let days = calcuateRentDays();
        let pricePerDay = props.car.pricePerDay? parseFloat(props.car.pricePerDay) : 0;
        let deposit = props.car.deposit? parseFloat(props.car.deposit) : 0;

        return days * pricePerDay + deposit;
    }

    return (
        <>
            <Card style={{ width: '40rem', marginBottom: "1rem"}}>
                <Card.Header>
                    {props.car.details.brand + " " + props.car.details.model}
                </Card.Header>
                <Card.Body>
                    <div style={{float: "left", paddingLeft: "1rem"}}>
                        <img src={props.car.img} style={{height: "140px"}} alt="img"/>
                    </div>
                    <div style={{float: "right", paddingRight: "1rem"}}>
                        <span style={{fontSize: "25px"}}>{props.car.details.class}</span><br/>
                        {props.car.protectionServices.fullyComprehensiveInsurance
                            ? <img src={tick} style={{height: "20px"}} alt="img"/>
                            : <img src={cross} style={{height: "20px"}} alt="img"/>}
                            {" Vollkaskoversicherung"}<br/>
                        {props.car.protectionServices.glassTireProtection
                            ? <img src={tick} style={{height: "20px"}} alt="img"/>
                            : <img src={cross} style={{height: "20px"}} alt="img"/>}
                            {" Glas- und Reifenschutz"}<br/>
                        {props.car.protectionServices.underbodyProtection
                            ? <img src={tick} style={{height: "20px"}} alt="img"/>
                            : <img src={cross} style={{height: "20px"}} alt="img"/>}
                            {" Unterbodenschutz"}<br/>
                        {props.car.deposit
                            ? <img src={tick} style={{height: "20px"}} alt="img"/>
                            : <img src={cross} style={{height: "20px"}} alt="img"/>}
                            {" Kaution: " + props.car.deposit + " €"}<br/>
                        {props.car.pricePerDay
                            ? <img src={tick} style={{height: "20px"}} alt="img"/>
                            : <img src={cross} style={{height: "20px"}} alt="img"/>}
                            {" Preis/Tag: " + props.car.pricePerDay + " €"}<br/>

                        <span className="img-with-text" style={{verticalAlign: "top", display: "inline-block", textAlign: "center", width: "50px"}}>
                            <img src={Sitze} style={{height: "20px"}} alt="img"/>
                            <span style={{display: "block", fontSize: "12px"}}>{props.car.details.seats}</span>
                        </span>
                        <span className="img-with-text" style={{verticalAlign: "top", display: "inline-block", textAlign: "center", width: "50px"}}>
                            <img src={Tueren} style={{height: "20px"}} alt="img"/>
                            <span style={{display: "block", fontSize: "12px"}}>{props.car.details.doors}</span>
                        </span>
                        <span className="img-with-text" style={{verticalAlign: "top", display: "inline-block", textAlign: "center", width: "60px"}}>
                            <img src={props.car.details.gearbox === "Automatik" ? Automatik: Manuell} alt="img" style={{height: "20px"}}/>
                            <span style={{display: "block", fontSize: "12px"}}>{props.car.details.gearbox}</span>
                        </span>
                        <span className="img-with-text" style={{display: "inline-block", width: "50px"}}>
                            {props.car.details.aircon ? <img src={Klimaanlage} style={{height: "20px"}} alt="img"/> : ""}
                        </span>
                        <span className="img-with-text" style={{display: "inline-block", width: "50px"}}>
                            {props.car.details.aircon ? <img src={Navigation} style={{height: "20px"}} alt="img"/> : ""}
                        </span>
                        <span className="img-with-text" style={{display: "inline-block", width: "50px"}}>
                            {props.car.details.aircon ? <img src={Infotainment} style={{height: "20px"}} alt="img"/> : ""}
                        </span>
                    </div>

                </Card.Body>
                <Card.Footer>
                    <span style={{fontSize: "2rem"}}>{calculatePrice() + " €"}</span> <span>Gesamtpreis inkl. Kaution für {calcuateRentDays()} Tage</span>
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