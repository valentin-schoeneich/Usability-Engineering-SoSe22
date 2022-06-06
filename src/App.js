import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Navigator from "./components/Navigator";
import MyAccount from "./components/LoginRegistration/MyAccount"
import CarFilterPage from "./components/CarFilter/CarFilterPage";
import Footer from "./components/Footer";
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


    return (
        <div>
            <Navigator/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/myAccount" element={<MyAccount/>} />
                    <Route path="/carFilter" element={<CarFilterPage/>} />
                </Routes>
            </BrowserRouter>
            <div style={{position: "absolute",
                bottom: "0",
                width: "100%"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
// /:location/:startDate/:endDate