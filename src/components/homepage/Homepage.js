
import SearchFields from "./SearchFields";
import CarSuggestions from "./CarSuggestions";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";
import './Homepage.css';
import React, {useEffect, useState} from "react";
import carFam from "../../imgs/familyCar.png";
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
                <Container className= "search">
                    <SearchFields/>
                </Container>
            </div>
            <container>
                <img src={carFam} style={{
                    resizeMode: "stretch",
                    height: 100,
                    width: 200,
                    marginLeft:"80%"
                }}/>
            </container>
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