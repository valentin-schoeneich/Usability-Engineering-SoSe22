import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CarSuggestions = props => {
    const handleRent = event => {
        window.location="http://localhost:3000/f40";
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.motor1.com/images/mgl/3zoJ6/s1/4x3/ferrari-feiert-30-jahre-f40.webp"
                      onClick={handleRent}/>
            <Card.Body>
                <Card.Title>Ferrari F40</Card.Title>
                <Button variant="primary" onClick={handleRent}>Jetzt Mieten</Button>
            </Card.Body>
        </Card>
    );
}
export default CarSuggestions;