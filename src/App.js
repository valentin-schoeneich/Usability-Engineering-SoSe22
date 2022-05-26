import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Navigator from "./components/Navigator"
import MyAccount from "./components/LoginRegistration/MyAccount"
import CarFilterPage from "./components/CarFilter/CarFilterPage";

function App() {

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
        </div>
    );
}

export default App;
