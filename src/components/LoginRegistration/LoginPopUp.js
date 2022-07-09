import React, { useEffect, useState} from 'react';
import {Form, Modal, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const LoginPopUp = props => {
    const [accountsData, setAccountsData] = useState(null);
    const [loginData, setLoginData] = useState({});
    const [loginErr, setLoginErr] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        accountsData.forEach(account => {
            if(account.email === loginData.email && account.password === loginData.password){
                setLoginErr(false);
                props.onLogin(account);
                props.switchPopUp();
            } else {
                setLoginErr(true);
            }
        });
    }


    const handleChange = event => {
        setLoginData({...loginData, [event.target.name]: event.target.value});
    }


    useEffect(() => {
        fetch('http://localhost:3001/accounts')
            .then(responseData => {
                return responseData.json()
            })
            .then(data => {
                setAccountsData(data);
            })
    }, [] );


    return (
        <div>
            <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Anmelden</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="email" column sm={3} md={5} lg={3}>E-Mail</Form.Label>
                            <Col sm={9} md={7} lg={9}>
                            <Form.Control id="email" onChange={handleChange} name="email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor={"password"} column sm={3} md={5} lg={3}>Passwort</Form.Label>
                            <Col sm={9} md={7} lg={9}>
                            <Form.Control id={"password"} onChange={handleChange} name="password" isInvalid={loginErr}/>
                            <Form.Control.Feedback type="invalid">
                                E-Mail oder Password falsch!
                            </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Speichern
                        </Button>
                        <Button variant="danger" type="button" onClick={props.switchPopUp}
                                className="mx-2">
                            Abbrechen
                        </Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default LoginPopUp;