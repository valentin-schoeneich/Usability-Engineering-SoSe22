import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Homepage from "./Homepage";
import Col from "react-bootstrap/cjs/Col";
import Container from "react-bootstrap/cjs/Container";
const SearchFields = props => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var todayDate = yyyy + '-' + mm + '-' + dd;
    console.log(todayDate)
    const [searchData, setSearchData] = useState({"location": "", "startDate": "", "endDate":""});
    const handleChange = event => {
        setSearchData({...searchData, [event.target.name]: event.target.value});
    }
    const handleSubmit = event => {
        console.log(todayDate);
        window.location.href = "http://localhost:3000/carFilter/"+searchData.location+searchData.startDate
            +searchData.endDate;
    }
    return (
        <Container >
            <Form style={{display: "flex"}} onSubmit={handleSubmit}>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Ort"
                        name="location"
                        id="search"
                        onChange= {handleChange}
                    />
                </Col>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Von"
                        min={todayDate}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                        max="2023-12-31"
                        name="startDate"
                        id = "von"
                        onChange= {handleChange}
                    />
                </Col>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder ="Bis"
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                        min= {todayDate}
                        max="2023-12-31"
                        name="endDate"
                        id="bis"
                        onChange= {handleChange}
                    />
                </Col>
                <Button variant="outline-success" onClick={handleSubmit}>Suche</Button>
            </Form>
        </Container>



    );
}
export default SearchFields;