import SearchFields from "./SearchFields";
import CarSuggestions from "./CarSuggestions";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";
import './Homepage.css';
import React, { useState } from "react";
import {Card} from "react-bootstrap";
import SuccessPopup from "../BookingPage/SuccessPopup";

function loaded(){
    window.localStorage.removeItem("showSuccessPopup");
}

const Homepage = props => {
    const [carsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));

    let show = window.localStorage.getItem("showSuccessPopup");

    const [successPopUp, setSuccessPopUp] = useState(show);
    const switchSuccessPopUp = () => {
        setSuccessPopUp(show => !show);
    }

    return (
        <div onLoad={loaded}>
            <div id="searchArea">
                <Card style={{alignContent:"center"}}>
                    <Container className= "search" style={{marginTop: "2%", marginBottom: "2%"}}>
                        <SearchFields/>
                    </Container>
                </Card>
            </div>
            <div id="carArea">
                <Container className="suggestions">
                    <Col>
                        <CarSuggestions carData = {carsData ? carsData[0] : ""}/>
                    </Col>
                    <Col style={{marginRight:"2%",marginLeft:"2%"}}>
                        <CarSuggestions carData = {carsData ? carsData[1] : ""}/>
                    </Col>
                    <Col>
                        <CarSuggestions carData = {carsData ? carsData[2] : ""}/>
                    </Col>
                </Container>
                {successPopUp
                    ? <SuccessPopup showPopUp={successPopUp} switchPopUp={switchSuccessPopUp}/>
                    : null}
            </div>
        </div>
    );  
}

export default Homepage;