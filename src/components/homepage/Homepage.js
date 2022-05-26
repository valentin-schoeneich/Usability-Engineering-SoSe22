import SearchFields from "./SearchFields";
import CarSuggestions from "./CarSuggestions";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";
import './Homepage.css';


const Homepage = props => {
    const handleRent = event => {
        window.location="http://localhost:3000/f40";
    }
    return (
        <div>
            <Container className= "search">
                <SearchFields/>
            </Container>
            <Container className="suggestions">
                <Col>
                    <CarSuggestions/>
                </Col>
                <Col>
                    <CarSuggestions/>
                </Col>
                <Col>
                    <CarSuggestions/>
                </Col>
            </Container>
        </div>
    );  
}




export default Homepage;