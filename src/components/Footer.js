import React from "react";
import Card from 'react-bootstrap/Card'
const Footer = props => {

    return (
        <div>
            <Card bg="dark" variant="dark" style={{ justifyItems:"center", bottom:"0"}}>
                <Card.Body style={{textAlign:"center"}}>
                    <a href="http://localhost:3000/Impressum">Impressum</a>
                    \t
                    <a href="http://localhost:3000/Datenschutz">Datenschutz</a>
                    \t
                    <a href="http://localhost:3000/Nutzungsbedinngungen">Nutzungsbedingungen</a>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Footer;