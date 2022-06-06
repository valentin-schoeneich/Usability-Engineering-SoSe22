import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";
import React from 'react';
function App() {

    return (
        <div>
            <Navigator/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
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
