import './DetailPage.css';
import React from 'react';
import car from "../../imgs/car.png";
import car2 from "../../imgs/car2.png";
import arrow from "../../imgs/arrow.svg"
import has from "../../imgs/hasDetail.png"
import didntHave from "../../imgs/didntHasDetail.png"
import {Button, Col, Container, NavLink, Row} from "react-bootstrap";
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

function calculateFinalPrice(){
    let pricePerDay = parseFloat(document.getElementById("pricePerDay").textContent);
    let deposit = parseFloat(document.getElementById("deposit").textContent);

    let from = new Date(document.getElementById("from").textContent);
    let to = new Date(document.getElementById("to").textContent);

    let days = ((to-from)/1000/60/60/24)+1;
    console.log(days)

    document.getElementById("finalPrice").textContent = pricePerDay * days + deposit;
}

function extras(){
    let ulhas = document.getElementById("unimportantDetails");
    ulhas.innerHTML = "";
    let uldidnthave = document.getElementById("didntHaveUnimportantDetails");
    uldidnthave.innerHTML = "";
    let list = [["Navi", true],["Infotainment", false],["Klimaanlage", true]];
    for(var i = 0; i<list.length; i++){
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

function onLoad(){
    calculateFinalPrice();
    extras();
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
        <Container onLoad={onLoad}>
            <h1>Dein Auton</h1>
            <Row>
                <Col>
                    <ImageGallery items={images} showPlayButton={false} />
                </Col>
                <Col>
                    <h2>Details</h2>
                    <ul>
                        <li>Türen: <span>5</span></li>
                        <li>Sitze: <span>5</span></li>
                        <li>Schatung: <span>manuel</span></li>
                        <li><p>S-Klasse Merceds</p></li>
                    </ul>
                    <NavLink href={"#unimportantDetails"}><span id="moreDetailText">Zu allen Details</span><img id="arrow" src={arrow} alt={"arrow"}/></NavLink>
                </Col>
                <Col>
                    <div id="bordered">
                        <h2>Preis</h2>
                        <ul >
                            <li>€/Tag: <span id="pricePerDay">50</span>€</li>
                            <li>Kautoin: <span id={"deposit"} >200</span>€</li>
                            <li>Kilometerlimit: <span>100</span>km</li>
                        </ul>
                        <div id={"summary"}><span id={"finalPrice"}>X</span>€ (inkl. Kaution) vom <span id={"from"}>11.11.2022</span> bis <span id={"to"}>11.12.2022</span></div>
                        <Button id={"bookButton"}>Jetzt Buchen </Button>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row >
                <Col>
                    <h3>Ausstatung</h3>
                    <ul id={"unimportantDetails"}>
                    </ul>
                    <ul id={"didntHaveUnimportantDetails"}>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default DetailPage;