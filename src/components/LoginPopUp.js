import React from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const LoginPopUp = props => {

    const handleSubmit = () => {
        console.log("submitted form");
    }

    return (
        <div>
            <Modal show={props.showPopUp} onHide={props.switchPopUp} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
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