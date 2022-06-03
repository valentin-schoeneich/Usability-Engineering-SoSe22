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
    const [filters, setFilters] = useState({"class": []});


    const setFiltersState = (filterKey, filterValue, deleteValue=false) => {
        /* TODO: checke ob filters[filterKey] ein array, ansonsten setFilters({...filters, [filterKey]: filterValue})
         wenn deleteValue === true, dann setFilters({...filters, [filterKey]: ""}) */
        if(!deleteValue){
            filters[filterKey].push(filterValue);
            setFilters({...filters, [filterKey]: filters[filterKey]});
        } else {
            filters[filterKey].forEach((filter, index) => {
                if(filter === filterValue){
                    filters[filterKey].splice(index, 1)
                }
            });
            setFilters({...filters, [filterKey]: filters[filterKey]});
        }

    }

    return (
        <>
            <h1>CarFilterPage</h1>
            <Container>
                <Row>
                    <Col>
                        {/*<ClassFilter filters={filters} setFiltersState={setFiltersState}/>*/}
                        {/* TODO komplexe filter zB mit einem Slider müssen leider als extra Komponente gebaut werden, ist aber
                        mehr oder weniger copy paste vom Basis Filter + ein paar Änderungen */}
                        <Filter filterName="Fahrzeugklasse" dataKey="class" filters={filters} setFiltersState={setFiltersState}
                                names={["Sportwagen", "Oberklasse", "Mittelklasse", "Kompaktklasse"]}
                                selectedNames={{"Sportwagen": false, "Oberklasse": false, "Mittelklasse": false, "Kompaktklasse": false}}/>
                    </Col>
                    <Col>
                        {carsData.filter(car => {
                            if(filters.class === "") return true;
                            let render = false;
                            filters.class.forEach(carclass => {
                                if(car.details.class === carclass) render = true;
                            });
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
