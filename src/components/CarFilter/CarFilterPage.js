import React,  { useState } from 'react';
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom"
import ClassFilter from "./ClassFilter";
import Col from "react-bootstrap/cjs/Col";
import CarTile from "./CarTile";
import Container from "react-bootstrap/cjs/Container";
import {Row} from "react-bootstrap";
import Filter from "./Filter";


const CarFilterPage = props => {
    const { location, startDate, endDate } = useParams();
    const [carsData, setCarsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));
    const [filters, setFilters] = useState({"class": "", "location": location});
    const [rerender, setRerender] = useState(false);

    const switchRerender = () => {
        setRerender(rerender => !rerender);
    }

    const setFiltersState = (filterKey, filterValue) => {
        setFilters({...filters, [filterKey]: filterValue});
    }

    return (
        <>
            <h1>CarFilterPage</h1>
            <Container>
                <Row>
                    <Col>
                        <ClassFilter filters={filters} setFiltersState={setFiltersState}
                            location={location} startDate={startDate} endDate={endDate} switchRerender={switchRerender}/>
                        <Filter filterName="Fahrzeugklasse" dataKey="class" filters={filters} setFiltersState={setFiltersState}
                                names={["Sportwagen", "Oberklasse", "Mittelklasse", "Kompaktklasse"]}
                                selectedNames={{"Sportwagen": false, "Oberklasse": false, "Mittelklasse": false, "Kompaktklasse": false}}/>
                    </Col>
                    <Col>
                        {carsData.filter(car => {
                            if(filters.class === "") return true;
                            let render = true;
                            if(car.details.class !== filters.class) render = false;
                            return render;
                        }).map((car, index) => {
                            return <CarTile car={car} key={index}/>;
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CarFilterPage;
