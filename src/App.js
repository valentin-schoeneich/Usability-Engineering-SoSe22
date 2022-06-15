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


    return (
        <div>
            <div style={{minHeight: "59rem"}}>
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
                width: "100%", marginTop:"auto"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
