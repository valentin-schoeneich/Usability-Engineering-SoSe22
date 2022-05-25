import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navigator from "./components/Navigator"
import DetailPage from "./components/DetailPage/DetailPage";

function App() {

    return (
        <div>
            <Navigator/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DetailPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
