
import SearchFields from "./SearchFields";
import CarSuggestions from "./CarSuggestions";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";
import './Homepage.css';
import React, {useEffect, useState} from "react";

const Homepage = props => {
    const [carsData, setCarsData] = useState(null);
    const handleRent = event => {
        window.location="http://localhost:3000/f40";
    }
    useEffect(() => {
        fetch('http://localhost:3001/cars')
            .then(responseData => {
                return responseData.json()
            })
            .then(data => {
                setCarsData(data);
            })
    }, [] );
    return (
        <div>
            <Container className= "search">
                <SearchFields></SearchFields>
            </Container>
            <Container className="suggestions">
                <Col style={{marginRight:"3%"}}>
                    <CarSuggestions carData = {carsData?carsData[0]:""}></CarSuggestions>
                </Col>
                <Col style={{marginLeft:"3%",marginRight:"3%"}}>
                    <CarSuggestions carData = {carsData?carsData[1]:""}></CarSuggestions>
                </Col >
                <Col style={{marginLeft:"3%"}}>
                    <CarSuggestions carData = {carsData?carsData[2]:""}></CarSuggestions>
                </Col>
            </Container>
        </div>
    );  
}

export default Homepage;