import React,  { useState } from 'react';
import { useParams } from "react-router-dom"
import Col from "react-bootstrap/cjs/Col";
import CarTile from "./CarTile";
import Container from "react-bootstrap/cjs/Container";
import {Row} from "react-bootstrap";
import FilterSection from "./FilterSection";
import FilterCards from "./FilterCards";
import Sportwagen from "../../imgs/sportwagen.png";
import Oberkkasse from "../../imgs/Oberklasse.png";
import Mittelklasse from "../../imgs/mittelklasse.png";
import Kompaktklasse from "../../imgs/kompaktklasse.png";
import Sitze from "../../imgs/sitze.png";
import Tueren from "../../imgs/tueren.png";



const CarFilterPage = props => {
    const { location, startDate, endDate } = useParams();
    const [carsData, setCarsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));
    const [filters, setFilters] = useState({"class": [], "seats": [], "gearbox": [],
                                                "doors": [], "aircon": [], "infotainment": [],
                                                "navigation": [], "fullyComprehensiveInsurance": [],
                                                "glassTireProtection": [], "underbodyProtection": []});


    const setFiltersState = (filterKey, filterValue, deleteValue=false) => {
        if(!deleteValue){
            //debugger
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

    const checkFilterArray = (carValue, filterValues) => {
        if(filterValues.length === 0) {
            return true;
        }
        let render = false;
        filterValues.forEach(filterValue => {
            if(carValue === filterValue) render = true;
        });
        return render;
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <FilterSection sectionName="Fahrzeugklasse" groupCards={false} cards={[
                            <FilterCards dataKey="class"
                                         groupCards={false}
                                         filters={filters}
                                         key="0"
                                         setFiltersState={setFiltersState}
                                         names={["Sportwagen", "Oberklasse", "Mittelklasse", "Kompaktklasse"]}
                                         selectedNames={["Sportwagen", "Oberklasse", "Mittelklasse", "Kompaktklasse"]}
                                         selected={{"Sportwagen": false, "Oberklasse": false, "Mittelklasse": false, "Kompaktklasse": false}}
                                         imgs={[Sportwagen, Oberkkasse, Mittelklasse, Kompaktklasse]}
                            />
                        ]}/>
                        <FilterSection sectionName="Anzahl Sitze" groupCards={false} cards={[
                            <FilterCards dataKey="seats"
                                         groupCards={false}
                                         filters={filters}
                                         key="0"
                                         setFiltersState={setFiltersState}
                                         names={["2", "4", "5"]}
                                         selectedNames={["2", "4", "5"]}
                                         selected={{"2": false, "4": false, "5": false}}
                                         imgs={[Sitze, Sitze, Sitze]}
                            />
                        ]}/>
                        <FilterSection sectionName="Anzahl Türen" groupCards={false} cards={[
                            <FilterCards dataKey="doors"
                                         groupCards={false}
                                         filters={filters}
                                         key="0"
                                         setFiltersState={setFiltersState}
                                         names={["2", "4"]}
                                         selectedNames={["2", "4"]}
                                         selected={{"2": false, "4": false}}
                                         imgs={[Tueren, Tueren, Tueren]}
                            />
                        ]}/>
                        <FilterSection sectionName="Getriebe" groupCards={false} cards={[
                            <FilterCards dataKey="gearbox"
                                         groupCards={false}
                                         filters={filters}
                                         key="0"
                                         setFiltersState={setFiltersState}
                                         names={["Automatik", "Manuell"]}
                                         selectedNames={["Automatik", "Manuell"]}
                                         selected={{"Automatik": false, "Manuell": false}}
                            />
                        ]}/>
                        <FilterSection sectionName="Ausstatung" groupCards={true} cards={[
                            <FilterCards dataKey="aircon"
                                         groupCards={true}
                                         filters={filters}
                                         key="0"
                                         selectedNames={["true"]}
                                         names={["Klimaanlage"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}} />,
                            <FilterCards dataKey="infotainment"
                                         groupCards={true}
                                         filters={filters}
                                         key="1"
                                         selectedNames={["true"]}
                                         names={["Infotainmentsystem"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}}
                            />,
                            <FilterCards dataKey="navigation"
                                         groupCards={true}
                                         filters={filters}
                                         key="2"
                                         selectedNames={["true"]}
                                         names={["Navigationssystem"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}}
                            />
                        ]}/>
                        <FilterSection sectionName="Schutzleistungen" groupCards={true} cards={[
                            <FilterCards dataKey="fullyComprehensiveInsurance"
                                         groupCards={true}
                                         filters={filters}
                                         key="0"
                                         selectedNames={["true"]}
                                         names={["Vollkaskoversicherung"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}} />,
                            <FilterCards dataKey="glassTireProtection"
                                         groupCards={true}
                                         filters={filters}
                                         key="1"
                                         selectedNames={["true"]}
                                         names={["Glas- und Reifenschutz"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}}
                            />,
                            <FilterCards dataKey="underbodyProtection"
                                         groupCards={true}
                                         filters={filters}
                                         key="2"
                                         selectedNames={["true"]}
                                         names={["Unterbodenschutz"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}}
                            />
                        ]}/>
                    </Col>
                    <Col>
                        {carsData.filter(car => {
                            return checkFilterArray(car.details.class, filters.class)
                                && checkFilterArray(car.details.seats, filters.seats)
                                && checkFilterArray(car.details.gearbox, filters.gearbox)
                                && checkFilterArray(car.details.doors, filters.doors)
                                && checkFilterArray(car.details.aircon, filters.aircon)
                                && checkFilterArray(car.details.infotainment, filters.infotainment)
                                && checkFilterArray(car.details.navigation, filters.navigation)
                                && checkFilterArray(car.protectionServices.fullyComprehensiveInsurance, filters.fullyComprehensiveInsurance)
                                && checkFilterArray(car.protectionServices.glassTireProtection, filters.glassTireProtection)
                                && checkFilterArray(car.protectionServices.underbodyProtection, filters.underbodyProtection);
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
