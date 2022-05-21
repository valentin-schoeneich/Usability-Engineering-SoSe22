import React, { useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const RegistrationPopUp = props => {
    const [registrationData, setRegistrationData] = useState(null);
    const [accountsData, setAccountsData] = useState(null);
    const [errors, setErrors] = useState({});


    const findFormErrors = () => {
        const newErrors = {};
        //const now = new Date().getTime();
        //const regexEmail = new RegExp("");

        if(!registrationData || registrationData.forename === undefined || registrationData.forename === "") newErrors.forename = "Bitte geben Sie einen Vornamen ein";
        if(!registrationData || registrationData.surname === undefined || registrationData.surname === "") newErrors.surname = "Bitte geben Sie einen Nachnamen ein";
        if(!registrationData || registrationData.gender === undefined ) newErrors.gender = "Bitte geben Sie ein Geschlecht an";
        if(!registrationData || registrationData.birthdate === undefined || registrationData.birthdate === "") newErrors.birthdate = "Bitte geben Sie ein Geburtsdatum ein";
        if(!registrationData || registrationData.email === undefined || registrationData.email === "") newErrors.email = "Bitte geben Sie eine E-Mail Adresse ein";
        if(!registrationData || registrationData.password === undefined || registrationData.password === "") newErrors.password = "Bitte geben Sie ein Password ein";

        if(registrationData){
            accountsData.forEach(account => {
                if(registrationData.email && account.email === registrationData.email) newErrors.email = "Email existiert bereits!";
            });
            //if(!regexEmail.test(registrationData.email)) newErrors.email = "Bitte geben Sie eine valide E-Mail Adresse ein!"
            if(registrationData.email && !registrationData.email.includes('@')) newErrors.email = "Bitte geben Sie eine valide E-Mail Adresse ein!";
            //if(new Date(registrationData.birthdate).getTime() < now) newErrors.birthdate = "Bitte wählen Sie ein gültiges Datum aus";
        }
        return newErrors;
    }


    const handleSubmit = event => {
        event.preventDefault();
        const newErrors = findFormErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            fetch('http://localhost:3001/accounts', {
                method: 'POST',
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(registrationData)
            });
            window.localStorage.setItem("accountData", JSON.stringify(registrationData));
            window.location.reload(true);
            props.switchPopUp();
        }
    }


    const handleChange = event => {
        setRegistrationData({...registrationData, [event.target.name]: event.target.value});

        if (!!errors[event.target.name]) {
            setErrors({ ...errors, [event.target.name]: null });
        }
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
                    <Modal.Title>Registrieren</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group>
                            <Form.Label>Vorname</Form.Label>
                            <Form.Control onChange={handleChange} name="forename" isInvalid={!!errors.forename}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.forename}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nachname</Form.Label>
                            <Form.Control onChange={handleChange} name="surname" isInvalid={!!errors.surname}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.surname}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Geschlecht</Form.Label>
                            <Form.Select defaultValue="Bitte auswählen" onChange={handleChange}
                                         name="gender" isInvalid={!!errors.gender}>
                                <option value="Bitte auswählen" disabled hidden>Bitte auswählen</option>
                                <option value="male">Männlich</option>
                                <option value="female">Weiblich</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.gender}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Geburtsdatum</Form.Label>
                            <Form.Control type="date" onChange={handleChange} name="birthdate" isInvalid={!!errors.birthdate}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.birthdate}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>E-Mail Adresse</Form.Label>
                            <Form.Control onChange={handleChange} name="email" isInvalid={!!errors.email}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Passwort</Form.Label>
                            <Form.Control onChange={handleChange} name="password" isInvalid={!!errors.password}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
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

export default RegistrationPopUp;