import './DetailPage.css';
import React, {useState} from 'react';
import car from "../../imgs/car.png";
import car2 from "../../imgs/car2.png";
import arrow from "../../imgs/arrow.svg"
import has from "../../imgs/hasDetail.png"
import didntHave from "../../imgs/didntHasDetail.png"
import {Button, Col, Container, NavLink, Row} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import {useParams} from "react-router-dom";


function calculateFinalPrice(){
    let pricePerDay = parseFloat(carInfo.pricePerDay);
    document.getElementById("pricePerDay").textContent = pricePerDay + "";
    let deposit = parseFloat(carInfo.deposit);
    document.getElementById("deposit").textContent = deposit + "";

    let from = new Date(start);
    let to = new Date(end);

    document.getElementById("from").textContent = from.toLocaleDateString("de-DE")
    document.getElementById("to").textContent = to.toLocaleDateString("de-DE")

    let days = ((to-from)/1000/60/60/24)+1;
    document.getElementById("days").textContent = days;

    document.getElementById("finalPrice").textContent = (pricePerDay * days + deposit)+ "";

    if(carInfo.kilometerLimit !== ""){
        document.getElementById("limit").getElementsByTagNameNS("span")[0].textContent = carInfo.kilometerLimit
    }else {
        document.getElementById("limit").textContent = "kein Kilometerlimit"
    }

}

function createList(ulhas, uldidnthave, list){
    ulhas.innerHTML = "";
    uldidnthave.innerHTML = "";
    for(let i = 0; i<list.length; i++){
        let li = document.createElement("li");
        let img = document.createElement("img");

        li.appendChild(img);
        li.appendChild(document.createTextNode(" " + list[i][0]));

        if(list[i][1]){
            img.setAttribute("src", has);
            ulhas.appendChild(li);
        } else {
            img.setAttribute("src", didntHave);
            uldidnthave.appendChild(li);
        }
    }
}

function extras(){
    let ausstatunghas = document.getElementById("unimportantDetails");
    let ausstatungdidnthave = document.getElementById("didntHaveUnimportantDetails");

    let assistencehas = document.getElementById("assistence");
    let assistencedidnthave = document.getElementById("didntHaveassistence");

    let insurencehas = document.getElementById("insurence");
    let insurencedidnthave = document.getElementById("didntHaveinsurence");

    let ausstatung = [["Navi", (carInfo.details.navigation === "true")],["Infotainment", (carInfo.details.infotainment === "true")],["Klimaanlage", (carInfo.details.aircon === "true")], ["Ersatzrad", true], ["Sitzheizung", true], ["Dachfenster", false], ["Einstiegshilfen", true], ["Android Auto/Apple Car", false], ["Massage Sitze", false], ["Anhängerkuplung", false]];
    let assistence = [["Scheibenwischautomatik", true], ["Lichtautomatik", true], ["Parkpiepser", true], ["Rückfahrkamera", true], ["Parkpilot", false], ["Bremsassistent", false], ["Spurhalteassistent", false]];
    let insurence = [["Haftpflichtversicherung", (carInfo.protectionServices.fullyComprehensiveInsurance === "true")], ["Reifenversicherung", true], ["Vollkasko", true], ["Glasversicherung", (carInfo.protectionServices.glassTireProtection === "true")], ["mehr Personen Versicherung", false], ["Rechtsschutzversicherung", false], ["Unterbodenschutz", (carInfo.protectionServices.underbodyProtection === "true")]];

    console.log(carInfo)

    createList(ausstatunghas, ausstatungdidnthave, ausstatung);
    createList(assistencehas, assistencedidnthave, assistence);
    createList(insurencehas, insurencedidnthave, insurence);
}

function onLoad(){
    calculateFinalPrice();
    extras();
    importantDetails();
}

function importantDetails(){
    document.getElementById("doors").textContent = carInfo.details.doors;
    document.getElementById("seats").textContent = carInfo.details.seats;
    document.getElementById("gearbox").textContent = carInfo.details.gearbox;
    document.getElementById("modelBrand").textContent = carInfo.details.model + " " +carInfo.details.brand;
}

window.addEventListener('scroll', function(ev) {

    var someDiv = document.getElementById('header');
    var distanceToTop = someDiv.getBoundingClientRect().top;

    if(distanceToTop < -230){
        document.getElementById("bordered").style.position = "fixed";
    }else {
        document.getElementById("bordered").style.position = "unset"
    }
    console.log(distanceToTop);
});

let carsData;
let carInfo;
let start;
let end;

const DetailPage = props => {
    [carsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));

    const {id, startDate, endDate} = useParams();
    start = startDate;
    end = endDate;

    carInfo = carsData.find(car => car.id == id);

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
        <Container onLoad={onLoad}>
            <h1 id={"header"}>Dein Auton</h1>
            <Row>
                <Col>
                    <ImageGallery items={images} showPlayButton={false} />
                </Col>
                <Col>
                    <h2>Details</h2>
                    <ul>
                        <li>Türen: <span id={"doors"}/></li>
                        <li>Sitze: <span id={"seats"}/></li>
                        <li>Schatung: <span id={"gearbox"}/></li>
                        <li><p id={"modelBrand"}/></li>
                    </ul>
                    <NavLink href={"#top"}><span id="moreDetailText">Zu allen Details</span><img id="arrow" src={arrow} alt={"arrow"}/></NavLink>
                </Col>
                <Col>
                    <div id="bordered">
                        <h2>Preis</h2>
                        <ul >
                            <li>€/Tag: <span id="pricePerDay"/>€</li>
                            <li>Kautoin: <span id={"deposit"}/>€</li>
                            <li id={"limit"}>Kilometerlimit: <span/>km</li>
                        </ul>
                        <div id={"summary"}><span id={"finalPrice"}/>€ (inkl. Kaution) für <span id={"days"}/> Tage, vom <span id={"from"}/> bis <span id={"to"}/></div>
                        <Button id={"bookButton"} href={"/bookingPage/" + id + "/" + start + "/" + end}>Jetzt Buchen </Button>
                    </div>
                </Col>
            </Row>
            <hr/>
            <a className="anchor" id="top"/>
            <Row >
                <Col>
                    <h3>Ausstatung</h3>
                    <ul id={"unimportantDetails"} className="has_or_not">
                    </ul>
                    <ul id={"didntHaveUnimportantDetails"} className="has_or_not">
                    </ul>
                </Col>
            </Row>
            <Row >
                <Col>
                    <h3>Assistenssysteme</h3>
                    <ul id={"assistence"} className="has_or_not">
                    </ul>
                    <ul id={"didntHaveassistence"} className="has_or_not">
                    </ul>
                </Col>
            </Row>
            <Row >
                <Col>
                    <h3>Schutz</h3>
                    <ul id={"insurence"} className="has_or_not">
                    </ul>
                    <ul id={"didntHaveinsurence"} className="has_or_not">
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default DetailPage;