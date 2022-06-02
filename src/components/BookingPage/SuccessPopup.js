import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const SuccessPopup = props => {

    return (
        <div>
            <Modal show={props.showPopUp} onHide={props.switchPopUp} size="l">
                <Modal.Header closeButton>
                    <Modal.Title>Buchung erfolgreich</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="success" type="button" onClick={props.switchPopUp}>
                        zurück zur Starseite
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SuccessPopup;