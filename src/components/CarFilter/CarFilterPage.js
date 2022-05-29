import React,  { useState } from 'react';
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom"
import Filter from "./Filter";
import Col from "react-bootstrap/cjs/Col";
import CarTile from "./CarTile";
import Container from "react-bootstrap/cjs/Container";
import {Row} from "react-bootstrap";


const CarFilterPage = props => {
    const [carsData, setCarsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));
    const [filteredCars, setFilteredCars] = useState(carsData);
    const { location, startDate, endDate } = useParams();


    return (
        <>
            <h1>CarFilterPage</h1>
            <Container>
                <Row>
                    <Col>
                        <Filter carsData={carsData} filteredCars={filteredCars} setFilteredCars={setFilteredCars}
                            location={location} startDate={startDate} endDate={endDate}/>
                    </Col>
                    <Col>
                        {filteredCars.map((car, key) => {
                            return <CarTile car={car} key={key}/>;
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CarFilterPage;