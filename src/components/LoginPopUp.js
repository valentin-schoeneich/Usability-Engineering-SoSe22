import React, { useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const LoginPopUp = props => {
    const [accountsData, setAccountsData] = useState(null);
    const [loginData, setLoginData] = useState({"email": "", "password": ""});
    const [loginState, setLoginState] = useState(false);


    const handleSubmit = event => {
        event.preventDefault();
        accountsData.forEach(account => {
            //debugger
            if(account.email === loginData.email && account.password === loginData.password){
                setLoginState(true);
                props.switchPopUp();
            } else {
                setLoginState(false);
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
            <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control onChange={handleChange} name="email"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Passwort</Form.Label>
                            <Form.Control onChange={handleChange} name="password" isInvalid={loginState}/>
                            <Form.Control.Feedback type="invalid">
                                E-Mail oder Password falsch!
                            </Form.Control.Feedback>
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