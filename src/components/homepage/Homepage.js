
import SearchFields from "./SearchFields";
import CarSuggestions from "./CarSuggestions";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";
import './Homepage.css';
import React, {useEffect, useState} from "react";
import carImg from "../../imgs/porsche.jpg"
import Card from "react-bootstrap/Card";
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
            </div>
        </div>
    );  
}

export default Homepage;