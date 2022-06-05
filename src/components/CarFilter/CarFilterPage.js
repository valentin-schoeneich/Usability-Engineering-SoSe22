import React,  { useState } from 'react';
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom"
import Col from "react-bootstrap/cjs/Col";
import CarTile from "./CarTile";
import Container from "react-bootstrap/cjs/Container";
import {Row} from "react-bootstrap";
import FilterSectionWithCards from "./FilterSectionWithCards";
import FilterSection from "./FilterSection";
import FilterCards from "./FilterCards";

// TODO: FILTER BUG, find out which action causes the filters not to work

const CarFilterPage = props => {
    const { location, startDate, endDate } = useParams();
    const [carsData, setCarsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));
    const [filters, setFilters] = useState({"class": [], "seats": [], "gearbox": [],
                                                "doors": [], "aircon": [], "infotainment": [],
                                                  "navigation": []});


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
                        {/*<FilterSectionWithCards filterName="Fahrzeugklasse" dataKey="class" filters={filters} setFiltersState={setFiltersState}
                                names={["Sportwagen", "Oberklasse", "Mittelklasse", "Kompaktklasse"]}
                                selectedNames={{"Sportwagen": false, "Oberklasse": false, "Mittelklasse": false, "Kompaktklasse": false}}/>
                        <FilterSectionWithCards filterName="Anzahl Sitze" dataKey="seats" filters={filters} setFiltersState={setFiltersState}
                                names={["2", "4", "5"]}
                                selectedNames={{"2": false, "4": false, "5": false}}/>
                        <FilterSectionWithCards filterName="Anzahl Türen" dataKey="doors" filters={filters} setFiltersState={setFiltersState}
                                names={["2", "4"]}
                                selectedNames={{"2": false, "4": false}}/>
                        <FilterSectionWithCards filterName="Getriebe" dataKey="gearbox" filters={filters} setFiltersState={setFiltersState}
                                names={["Automatik", "Manuell"]}
                                selectedNames={{"Automatik": false, "Manuell": false}}/>*/}
                        <FilterSection sectionName="Fahrzeugklasse" groupCards={false} cards={[
                            <FilterCards dataKey="class"
                                         groupCards={false}
                                         filters={filters}
                                         key="0"
                                         setFiltersState={setFiltersState}
                                         names={["Sportwagen", "Oberklasse", "Mittelklasse", "Kompaktklasse"]}
                                         selectedNames={["Sportwagen", "Oberklasse", "Mittelklasse", "Kompaktklasse"]}
                                         selected={{"Sportwagen": false, "Oberklasse": false, "Mittelklasse": false, "Kompaktklasse": false}}
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
                    </Col>
                    <Col>
                        {carsData.filter(car => {
                            return checkFilterArray(car.details.class, filters.class)
                                && checkFilterArray(car.details.seats, filters.seats)
                                && checkFilterArray(car.details.gearbox, filters.gearbox)
                                && checkFilterArray(car.details.doors, filters.doors)
                                && checkFilterArray(car.details.aircon, filters.aircon)
                                && checkFilterArray(car.details.infotainment, filters.infotainment)
                                && checkFilterArray(car.details.navigation, filters.navigation);
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
