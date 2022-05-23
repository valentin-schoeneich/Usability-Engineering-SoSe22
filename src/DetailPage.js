import './DetailPage.css';
import React from 'react';
import car from "./imgs/car.png";
import car2 from "./imgs/car2.png";
import arrow from "./imgs/arrow.svg"
import {Button, Col, Container, Row, NavLink} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';


function showHiddeDetails(){
    if(document.getElementById("unimportantDetails").style.display==="block"){
        document.getElementById("unimportantDetails").style.display="none";
        document.getElementById("moreDetailText").textContent="Alle Details anzeigen";
        document.getElementById("arrow").style.transform = "rotate(180deg)";
    }else {
        document.getElementById("unimportantDetails").style.display="block";
        document.getElementById("moreDetailText").textContent="Weniger Details anzeigen";
        document.getElementById("arrow").style.transform = "rotate(0deg)";
    }
}



const DetailPage = props => {

    const images = [
        {
            original: car,
            thumbnail: car
        },
        {
            original: car2,
            thumbnail: car2
        }
    ]

    return (
        <Container>
            <h1>Dein Auton</h1>
            <Row>
                <Col>
                    <ImageGallery items={images} showPlayButton={false} />
                </Col>
                <Col>
                    <h2>Details</h2>
                    <ul>
                        <li>Türen: 5</li>
                        <li>Sitze: 5</li>
                        <li>Schatung: manuel</li>
                        <li>S-Klasse Merceds</li>
                    </ul>
                    <NavLink onClick={showHiddeDetails}><span id="moreDetailText">Alle Details anzeigen</span><img id="arrow" src={arrow} alt={"arrow"}/></NavLink>
                    <ul id="unimportantDetails">
                        <li>mit Navi</li>
                        <li>mit Klimaanlage</li>
                        <li>mit Infotainment</li>
                        <li>unwichtig: 500</li>
                        <li>unwichtig: 500</li>
                        <li>unwichtig: 500</li>
                    </ul>
                </Col>
                <Col>
                    <div id="bordered">
                        <h2>Preis</h2>
                        <ul>
                            <li>€/Tag: </li>
                            <li>Kautoin: </li>
                            <li>Kilometerlimit: </li>
                        </ul>
                        <p>x€ für dem Zeitraum von x - x</p>
                        <Button>Jetzt Buchen</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DetailPage;