import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Navigator from "./components/Navigator";
import MyAccount from "./components/LoginRegistration/MyAccount"
import CarFilterPage from "./components/CarFilter/CarFilterPage";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage/BookingPage";
import DetailPage from "./components/DetailPage/DetailPage";


function App() {


    useEffect(() => {
        fetch('http://localhost:3001/cars')
            .then(responseData => {
                return responseData.json()
            })
            .then(data => {
                window.localStorage.setItem("carsData", JSON.stringify(data));
                //console.log(JSON.parse(window.localStorage.getItem("carsData")));
            })
    }, [] );

    function dynamicHeight(){
        var windowheight = window.innerHeight;
        var p = document.getElementById("footer");
        var footerHeight = window.getComputedStyle(p).height;
        document.getElementById("dynamicHeight").style.minHeight = (windowheight - Number(footerHeight.slice(0, -2)) -1).toString() + "px";
        console.log(windowheight - Number(footerHeight.slice(0, -2)));
    }

    return (
        <div>
            <div id={"dynamicHeight"} style={{minHeight: "722px"}} onLoad={dynamicHeight}>
                <Navigator/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage/>} />
                        <Route path="/myAccount" element={<MyAccount/>} />
                        <Route path="/carFilter/:location/:startDate/:endDate" element={<CarFilterPage/>} />
                        <Route path="/bookingPage/:id/:startDate/:endDate" element={<BookingPage/>} />
                        <Route path="/detailPage/:id/:startDate/:endDate" element={<DetailPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <div style={{
                width: "100%", marginTop:"auto"}} id={"footer"}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
