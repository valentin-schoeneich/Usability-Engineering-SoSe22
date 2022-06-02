import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AbortPopup = props => {

    return (
        <div>
            <Modal show={props.showPopUp} onHide={props.switchPopUp} size="l">
                <Modal.Header closeButton>
                    <Modal.Title>Buchungsvorgang wirklich Abbrechen?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="danger" type="button"
                            className="mx-2">
                        Abbrechen
                    </Button>
                        <Button variant="primary" type="button" onClick={props.switchPopUp}>
                            zurück zur Buchung
                        </Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AbortPopup;