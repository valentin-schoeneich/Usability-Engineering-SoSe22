import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
//import Homepage from "./Homepage";
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
    const [errors, setErrors] = useState({});
    const findFormErrors = () => {
        const newErrors = {};
        if(!searchData || searchData.location === undefined || searchData.location === "") newErrors.location = "Bitte wählen Sie einen Ort aus";
        if(!searchData || searchData.startDate === undefined || searchData.startDate === "") newErrors.startDate = "Bitte wählen Sie ein Startdatum aus";
        if(!searchData || searchData.endDate === undefined || searchData.endDate === "") newErrors.endDate = "Bitte wählen Sie ein Enddatum aus";
        return newErrors;
    }
    const handleChange = event => {
        setSearchData({...searchData, [event.target.name]: event.target.value});
    }


    const handleSubmit = event => {
        event.preventDefault();
        const newErrors = findFormErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }else{
            window.location.href = "http://localhost:3000/carFilter/"+searchData.location+searchData.startDate
            +searchData.endDate;
        }

    }
    return (
        <Container >
            <Form style={{display: "flex"}} onSubmit={handleSubmit}>
                <Col>
                    <Form.Select
                        name="location"
                        onChange= {handleChange}
                        isInvalid={!!errors.location}
                    >
                        <option disabled selected hidden>Ort</option>
                        <option>Frankfurt</option>
                        <option>Mainz</option>
                        <option>Oestrich</option>
                        <option>Wiesbaden</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.location}
                    </Form.Control.Feedback>
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
                        isInvalid={!!errors.startDate}
                        onChange= {handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.startDate}
                    </Form.Control.Feedback>
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
                        isInvalid={!!errors.startDate}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.startDate}
                    </Form.Control.Feedback>
                </Col>
                <Button variant="outline-success" type="submit"
                        href={`/carFilter`}>
                    Suche
                </Button>
            </Form>
        </Container>



    );
}
export default SearchFields;
/*
${searchData.location ? "/" + searchData.location : ""}
${searchData.startDate ? "/" + searchData.startDate : ""}
${searchData.endDate ? "/" + searchData.endDate : ""}
*/
