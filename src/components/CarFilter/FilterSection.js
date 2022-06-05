import React,  { useState } from 'react';
import {Card, Collapse, Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import Col from "react-bootstrap/cjs/Col";


const FilterSection = props => {
    const [openFilterSection, setOpenFilterSection] = useState(false);

    return (
        <>
            <Card style={{ width: '30rem' }}>
                <Card.Header
                    onClick={() => setOpenFilterSection(!openFilterSection)}
                    aria-controls="example-collapse-text"
                    aria-expanded={openFilterSection}
                >
                    {props.sectionName} {openFilterSection ? " ᐱ" : " ᐯ"}
                </Card.Header>

                <Collapse in={openFilterSection}>
                    <div id="example-collapse-text">

                        {props.groupCards ? <Container><Row>{props.cards}</Row></Container> : props.cards}
                    </div>
                </Collapse>
            </Card>
        </>
    );
}

export default FilterSection;