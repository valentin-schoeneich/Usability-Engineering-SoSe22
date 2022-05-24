import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Navigator from "./components/Navigator"

function App() {

    return (
        <div>
            <Navigator/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
