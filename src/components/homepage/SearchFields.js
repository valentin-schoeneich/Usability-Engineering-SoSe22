import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Col from "react-bootstrap/cjs/Col";
import Container from "react-bootstrap/cjs/Container";


const SearchFields = props => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let todayDate = yyyy + '-' + mm + '-' + dd;
    const [searchData, setSearchData] = useState({
        "location": props.valueSelect ? props.valueSelect : "",
        "startDate": props.valueStartDate ? props.valueStartDate : "",
        "endDate": props.valueEndDate ? props.valueEndDate : ""});
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
        let newErrors = findFormErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }else{
            window.location.href = "http://localhost:3000/carFilter"
                + "/" + searchData.location
                + "/" + searchData.startDate
                + "/" + searchData.endDate;
        }

    }

    function changeDateToTextInput(target){
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        let date = new Date(target.value);
        target.type = "text";
        target.value = date.toLocaleDateString('de-DE', options);
    }

    function changeTextToDateInput(target){
        if(target.type === "text"){
            let dateString = target.value.substr(6,4) + "-" + target.value.substr(3,2) + "-" + (target.value.substr(0,2))
            target.type = "date";
            target.value = dateString;
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
                        defaultValue={props.valueSelect ? props.valueSelect : "Ort"}
                        style={{width: props.selectWidth ? props.selectWidth: ""}}
                        id="locationSelect"
                    >
                        <option disabled hidden>Ort</option>
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

                        onFocus={(e) => (changeTextToDateInput(e.target))}
                        onBlur={(e) => (changeDateToTextInput(e.target))}
                        max="2023-12-31"

                        defaultValue={props.valueStartDate ? props.valueStartDate : ""}
                        name="startDate"
                        id = "von"
                        isInvalid={!!errors.startDate}
                        onChange= {handleChange}
                        style={{width: props.startDateWidth ? props.startDateWidth : "15rem"}}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.startDate}
                    </Form.Control.Feedback>
                </Col>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder ="Bis"
                        onFocus={(e) => (changeTextToDateInput(e.target))}
                        onBlur={(e) => (changeDateToTextInput(e.target))}
                        min= {todayDate}
                        max="2023-12-31"
                        defaultValue={props.valueEndDate ? props.valueEndDate : ""}
                        name="endDate"
                        id="bis"
                        onChange= {handleChange}
                        isInvalid={!!errors.startDate}
                        style={{width: props.endDateWidth ? props.endDateWidth : "15rem"}}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.endDate}
                    </Form.Control.Feedback>
                </Col>
                <Button variant="outline-success" type="submit">
                    Suche
                </Button>
            </Form>
        </Container>
    );
}
export default SearchFields;

