
import SearchFields from "./SearchFields";
import CarSuggestions from "./CarSuggestions";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";
import './Homepage.css';
import React, { useState } from "react";

const Homepage = props => {
    const [carsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));


    return (
        <div>
            <Container className= "search">
                <SearchFields/>
            </Container>
            <Container className="suggestions">
                <Col>
                    <CarSuggestions carData = {carsData ? carsData[0] : ""}/>
                </Col>
                <Col>
                    <CarSuggestions carData = {carsData ? carsData[1] : ""}/>
                </Col>
                <Col>
                    <CarSuggestions carData = {carsData ? carsData[2] : ""}/>
                </Col>
            </Container>
        </div>
    );  
}

export default Homepage;