import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Homepage from "./Homepage";
import Col from "react-bootstrap/cjs/Col";
import Container from "react-bootstrap/cjs/Container";

const SearchFields = props => {
    const [searchData, setSearchData] = useState({"location": "", "startDate": "", "endDate":""});
    const handleChange = event => {
        setSearchData({...searchData, [event.target.name]: event.target.value});
    }
    const handleSubmit = event => {
        console.log(searchData.location);
        window.location = "http://localhost:3000/f40";

    }
    return (
        <Container >
            <Form style={{display: "flex"}} onSubmit={handleSubmit}>
                <Col>
                    <Form.Control
                        type="search"
                        placeholder="Ort"
                        className="me-2"
                        aria-label="Search"
                        name="location"
                        onChange= {handleChange}
                    />
                </Col>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Von"
                        min="2022-05-18"
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
                        min="2022-05-18"
                        max="2023-12-31"
                        id="bis"
                        onChange= {handleChange}
                    />
                </Col>
                <Button variant="outline-success" type="submit">Suche</Button>
            </Form>
        </Container>



    );
}
export default SearchFields;