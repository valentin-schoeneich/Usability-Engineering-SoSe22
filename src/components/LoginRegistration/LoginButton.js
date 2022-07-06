import React,  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import LoginPopUp from "./LoginPopUp";


const LoginButton = props => {
    const [loginPopUp, setLoginPopUp] = useState(false);

    const switchLoginPopUp = () => {
        setLoginPopUp(show => !show);
    }

    return (
        <>
            <Button variant="primary" onClick={switchLoginPopUp} style={{ borderRight: "solid" }}>Anmelden</Button>
            {loginPopUp
                ? <LoginPopUp showPopUp={loginPopUp} switchPopUp={switchLoginPopUp} onLogin={props.onLogin}/>
                : null}
        </>
    );
}

export default LoginButton;