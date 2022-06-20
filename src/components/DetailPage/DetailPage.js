import './DetailPage.css';
import React, {useState} from 'react';
import innen from "../../imgs/lenkrad.jpg";
import kofferraum from "../../imgs/kofferraum.jpg";
import arrow from "../../imgs/arrow.svg"
import has from "../../imgs/hasDetail.png"
import didntHave from "../../imgs/didntHasDetail.png"
import {Button, Card, Col, Container, NavLink, Row} from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import {useParams} from "react-router-dom";
import Sitze from "../../imgs/sitze.png";
import Tueren from "../../imgs/tueren.png";
//import Automatik from "../../imgs/automatik.png";
import Manuell from "../../imgs/manuell.png";
//import Klimaanlage from "../../imgs/Klimaanlage.png";
//import Navigation from "../../imgs/navigation.png";
//import Infotainment from "../../imgs/infotainment.png";
import Sportwagen from "../../imgs/sportwagen.png";
import Oberkkasse from "../../imgs/Oberklasse.png";
import Mittelklasse from "../../imgs/mittelklasse.png";
import Kompaktklasse from "../../imgs/kompaktklasse.png";


function calculateFinalPrice(){

    let pricePerDay = 0;
    if(carInfo) pricePerDay = parseFloat(carInfo.pricePerDay);
    document.getElementById("pricePerDay").textContent = pricePerDay + "";
    let deposit = 0;
    if(carInfo) deposit = parseFloat(carInfo.deposit);
    document.getElementById("deposit").textContent = deposit + "";

    let from = new Date(start);
    let to = new Date(end);

    document.getElementById("from").textContent = from.toLocaleDateString("de-DE")
    document.getElementById("to").textContent = to.toLocaleDateString("de-DE")

    let days = ((to-from)/1000/60/60/24)+1;
    document.getElementById("days").textContent = days;

    document.getElementById("finalPrice").textContent = (pricePerDay * days + deposit)+ "";

    if(carInfo && carInfo.kilometerLimit !== ""){
        document.getElementById("limit").getElementsByTagName("span")[0].textContent = carInfo.kilometerLimit
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

    if(carInfo){
        let ausstatung = [["Navi", (carInfo.details.navigation === "true")],["Infotainment", (carInfo.details.infotainment === "true")],["Klimaanlage", (carInfo.details.aircon === "true")], ["Ersatzrad", true], ["Sitzheizung", true], ["Dachfenster", false], ["Einstiegshilfen", true], ["Android Auto/Apple Car", false], ["Massage Sitze", false], ["Anhängerkuplung", false]];
        let assistence = [["Scheibenwischautomatik", true], ["Lichtautomatik", true], ["Parkpiepser", true], ["Rückfahrkamera", true], ["Parkpilot", false], ["Bremsassistent", false], ["Spurhalteassistent", false]];
        let insurence = [["Haftpflichtversicherung", (carInfo.protectionServices.fullyComprehensiveInsurance === "true")], ["Reifenversicherung", true], ["Vollkasko", true], ["Glasversicherung", (carInfo.protectionServices.glassTireProtection === "true")], ["mehr Personen Versicherung", false], ["Rechtsschutzversicherung", false], ["Unterbodenschutz", (carInfo.protectionServices.underbodyProtection === "true")]];

        createList(ausstatunghas, ausstatungdidnthave, ausstatung);
        createList(assistencehas, assistencedidnthave, assistence);
        createList(insurencehas, insurencedidnthave, insurence);
    }



}

function onLoad(){
    calculateFinalPrice();
    extras();
    importantDetails();
    window.addEventListener('scroll', function(ev) {

        var someDiv = document.getElementById('header');
        var distanceToTop = someDiv.getBoundingClientRect().top;

        if(distanceToTop < -326){
            document.getElementById("bordered").style.position = "fixed";
            var p = document.getElementById("container");
            document.getElementById("bordered").style.marginRight = window.getComputedStyle(p).marginRight;
        }else {
            document.getElementById("bordered").style.position = "unset";
            document.getElementById("bordered").style.marginRight = "0";
        }
        //console.log(distanceToTop);
    });
}

function importantDetails(){
    if(carInfo){
        document.getElementById("doors").textContent = carInfo.details.doors;
        document.getElementById("seats").textContent = carInfo.details.seats;
        document.getElementById("gearbox").textContent = carInfo.details.gearbox;
        document.getElementById("class").textContent = carInfo.details.class;
    }
}

function classPicture(){
    let carClass = carInfo ? carInfo.details.class : "";
    switch (carClass){
        case "Oberklasse": return <img src={Oberkkasse} alt="img"/>;
        case "Kompaktklasse": return <img src={Kompaktklasse} alt="img"/>;
        case "Mittelklasse": return <img src={Mittelklasse} alt="img"/>;
        case "Sportwagen": return <img src={Sportwagen} alt="img"/>;
        default: return "";
    }
}

let carsData;
let carInfo;
let start;
let end;

const DetailPage = props => {
    [carsData] = useState(JSON.parse(window.localStorage.getItem("carsData")));

    const {id, startDate, endDate} = useParams();
    start = startDate;
    end = endDate;

    if(carsData){
        carInfo = carsData.find(car => car.id.toString() === id);
    }

    const images = [
        {
            original: carInfo ? carInfo.img : "",
            thumbnail: carInfo ? carInfo.img : "",
            originalHeight: 250,
        },
        {
            original: innen,
            thumbnail: innen,
            originalHeight: 250,
        },
        {
            original: kofferraum,
            thumbnail: kofferraum,
            originalHeight: 250,
        }
    ]

    return (
        <Container onLoad={onLoad} id={"container"}>
            <h1 id={"header"}>{carInfo ? carInfo.details.model + " " +carInfo.details.brand : ""}</h1>
            <Row>

                <Col>
                    <ImageGallery items={images} showPlayButton={false} />
                </Col>
                <Col>
                    <h2>Details</h2>
                    <ul id={"detailList"}>
                        <li><img src={Tueren} alt="img"/> <span id={"doors"}/></li>
                        <li><img src={Sitze} alt="img"/> <span id={"seats"}/></li>
                        <li><img src={Manuell} alt="img"/> <span id={"gearbox"}/></li>
                        <li>{classPicture()} <span id={"class"}/></li>
                    </ul>
                    <NavLink href={"#top"}><span id="moreDetailText">Zu allen Details</span><img id="arrow" src={arrow} alt={"arrow"}/></NavLink>
                </Col>
                <Col>
                    <Card id="bordered">
                        <Card.Header>
                            <h2>Preis</h2>
                        </Card.Header>
                        <Card.Body>
                            <ul >
                                <li>€/Tag: <span id="pricePerDay"/>€</li>
                                <li>Kautoin: <span id={"deposit"}/>€</li>
                                <li id={"limit"}>Kilometerlimit: <span/>km</li>
                            </ul>
                            <div id={"summary"}><span id={"finalPrice"}/>€ (inkl. Kaution) für <span id={"days"}/> Tage, vom <span id={"from"}/> bis <span id={"to"}/></div>
                            <Button id={"bookButton"} href={"/bookingPage/" + id + "/" + start + "/" + end}>Jetzt Buchen </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr style={{height: "3px"}}/>
            {/*TODO hier kommt einen warning zu dem anchor dass da wohl ein href benötigt wird*/}
            <a className="anchor" id="top"> </a>
            <Row>
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