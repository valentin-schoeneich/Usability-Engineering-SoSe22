import React,  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RegistrationPopUp from "./RegistrationPopUp";


const RegistrationButton = props => {
    const [registrationPopUp, setRegistrationPopUp] = useState(false);

    const switchRegistrationPopUp = () => {
        setRegistrationPopUp(show => !show);
    }

    return (
        <>
            <Button variant="link" onClick={switchRegistrationPopUp} style={{ textDecoration: 'none' }}>Registieren</Button>
            {registrationPopUp
                ? <RegistrationPopUp showPopUp={registrationPopUp} switchPopUp={switchRegistrationPopUp}/>
                : null}
        </>
    );
}

export default RegistrationButton;