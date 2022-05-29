import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navigator from "./components/Navigator"
import MyAccount from "./components/LoginRegistration/MyAccount"
import BookingPage from "./components/BookingPage/BookingPage";

function App() {

    return (
        <div>
            <Navigator/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookingPage/>} />
                    <Route path="/myAccount" element={<MyAccount/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
