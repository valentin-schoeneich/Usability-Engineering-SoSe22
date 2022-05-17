import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState} from 'react';
const Homepage = props => {
    const [searchData, setSearchData] = useState({"location": "", "startDate": "", "endDate":""});
    const handleChange = event => {
        setSearchData({...searchData, [event.target.name]: event.target.value});
    }
    const handleSubmit = event => {
        console.log(searchData.location);
        window.location="http://localhost:3000/f40";

    }
    const handleRent = event => {
        window.location="http://localhost:3000/f40";
    }
    return (
        <div>
            <h1>Homepage</h1>
            <Form className="d-flex" onSubmit={handleSubmit} >
                <FormControl
                    type="search"
                    placeholder="Ort"
                    className="me-2"
                    aria-label="Search"
                    name="location"
                    onChange= {handleChange}
                />
                <FormControl
                    type="date"
                    placeholder="Von"
                    min="2022-05-18"
                    max="2023-12-31"
                    name="startDate"
                    onChange= {handleChange}
                />
                <FormControl
                    type="date"
                    placeholder ="Bis"
                    min="2022-05-18"
                    max="2023-12-31"
                    name="endDate"
                    onChange= {handleChange}
                />
                <Button variant="outline-success" type="submit">Suche</Button>
            </Form>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.motor1.com/images/mgl/3zoJ6/s1/4x3/ferrari-feiert-30-jahre-f40.webp" />
                <Card.Body>
                    <Card.Title>Ferrari F40</Card.Title>
                    <Button variant="primary" onClick={handleRent}>Jetzt Mieten</Button>
                    </Card.Body>
            </Card>
        </div>
    );  
}

export default Homepage;