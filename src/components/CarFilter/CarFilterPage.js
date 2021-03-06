import React,  { useState } from 'react';
import { useParams } from "react-router-dom"
import Col from "react-bootstrap/cjs/Col";
import CarTile from "./CarTile";
import Container from "react-bootstrap/cjs/Container";
import {Card, Row} from "react-bootstrap";
import FilterSection from "./FilterSection";
import FilterCards from "./FilterCards";
import Sportwagen from "../../imgs/sportwagen.png";
import Oberkkasse from "../../imgs/Oberklasse.png";
import Mittelklasse from "../../imgs/mittelklasse.png";
import Kompaktklasse from "../../imgs/kompaktklasse.png";
import Sitze from "../../imgs/sitze.png";
import Tueren from "../../imgs/tueren.png";
import Automatik from "../../imgs/automatik.png";
import Manuell from "../../imgs/manuell.png";
import Klimaanlage from "../../imgs/Klimaanlage.png";
import Navigation from "../../imgs/navigation.png";
import Infotainment from "../../imgs/infotainment.png";
import Insurance from "../../imgs/insurance.jpg";
import SearchField from "../homepage/SearchFields";


const CarFilterPage = props => {
    const { location, startDate, endDate } = useParams();
    const [carsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));
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


    const checkFilterDates = (bookedPeriods) => {
        let filterStartDate = new Date(startDate);
        let filterEndDate = new Date(endDate);

        for(let i = 0; i < bookedPeriods.length; i++){
            let bookedPeriod = bookedPeriods[i];
            let from = new Date(bookedPeriod.from);
            let to = new Date(bookedPeriod.to);

            if(filterStartDate > from && filterStartDate < to){
                return false;
            } else if(from.getTime() === filterStartDate.getTime() && filterStartDate < to){
                return false;
            } else if(filterStartDate > from && filterStartDate.getTime() === to.getTime()){
                return false;
            } else if(filterEndDate > from && filterEndDate < to){
                return false;
            } else if(filterEndDate.getTime() === from.getTime() && filterEndDate < to){
                return false;
            } else if(filterEndDate > from && filterEndDate.getTime() === to.getTime()){
                return false;
            } else if(filterStartDate < from && filterEndDate > to){
                return false;
            }
        }
        return true;
    }


    return (
        <>
            <Container style={{marginTop: "2rem"}}>
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
                        <FilterSection sectionName="Anzahl T??ren" groupCards={false} cards={[
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
                                         imgs={[Automatik, Manuell]}
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
                                         selected={{"true": false}}
                                         imgs={[Klimaanlage]}
                            />,
                            <FilterCards dataKey="infotainment"
                                         groupCards={true}
                                         filters={filters}
                                         key="1"
                                         selectedNames={["true"]}
                                         names={["Infotainmentsystem"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}}
                                         imgs={[Infotainment]}
                            />,
                            <FilterCards dataKey="navigation"
                                         groupCards={true}
                                         filters={filters}
                                         key="2"
                                         selectedNames={["true"]}
                                         names={["Navigationssystem"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}}
                                         imgs={[Navigation]}
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
                                         selected={{"true": false}}
                                         imgs={[Insurance]}
                            />,
                            <FilterCards dataKey="glassTireProtection"
                                         groupCards={true}
                                         filters={filters}
                                         key="1"
                                         selectedNames={["true"]}
                                         names={["Glas- und Reifenschutz"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}}
                                         imgs={[Insurance]}
                            />,
                            <FilterCards dataKey="underbodyProtection"
                                         groupCards={true}
                                         filters={filters}
                                         key="2"
                                         selectedNames={["true"]}
                                         names={["Unterbodenschutz"]}
                                         setFiltersState={setFiltersState}
                                         selected={{"true": false}}
                                         imgs={[Insurance]}
                            />
                        ]}/>
                    </Col>
                    <Col>
                        <Card style={{width: '40rem', marginBottom: "2rem"}}>
                            <Card.Header>Ort und Zeitraum</Card.Header>
                            <Card.Body>
                                <SearchField selectWidth="8rem" startDateWidth="8rem" endDateWidth="8rem"
                                             valueStartDate={startDate} valueEndDate={endDate}
                                             valueSelect={location}/>
                            </Card.Body>
                        </Card>
                        {carsData.filter(car => {
                            return car.location === location
                                && checkFilterDates(car.booked)
                                && checkFilterArray(car.details.class, filters.class)
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
