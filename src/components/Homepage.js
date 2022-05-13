import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
const Homepage = props => {
    state object datum ort json
    return (
        <div>
            <h1>Homepage</h1>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Ort"
                    className="me-2"
                    aria-label="Search"
                    onchange=
                />
                <FormControl
                    type="date"
                    placeholder="Von"
                    max="2023-12-31"
                    id="von"
                    onchange=
                />
                <FormControl
                    type="date"
                    placeholder ="Bis"
                    max="2023-12-31"
                    onchange=
                />
                <Button variant="outline-success">Suche</Button>
            </Form>
        </div>
    );  
}

export default Homepage;