import React,  { useState } from 'react';
import {Card, Collapse, Row} from "react-bootstrap";
import Container from "react-bootstrap/cjs/Container";
import "../HoverEffect.css"

const FilterSection = props => {
    const [openFilterSection, setOpenFilterSection] = useState(false);

    return (
        <>
            <Card style={{ width: '25rem' }} className={"hover"}>
                <Card.Header
                    onClick={() => setOpenFilterSection(!openFilterSection)}
                    aria-controls="collapse-text"
                    aria-expanded={openFilterSection}
                >
                    <div>{props.sectionName} <span style={{float: "right"}}>{openFilterSection ? " ᐱ" : " ᐯ"}</span></div>
                </Card.Header>

                <Collapse in={openFilterSection}>
                    <div id="collapse-text">

                        {props.groupCards ? <Container><Row>{props.cards}</Row></Container> : props.cards}
                    </div>
                </Collapse>
            </Card>
        </>
    );
}

export default FilterSection;