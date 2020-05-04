import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Components
import Heading from "../../components/common/Heading";
import ProgressBar from "../../components/common/ProgressBar";

function About3() {
    return (
        <div className="section section-about section-about-2">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Col xl={6}></Col>
                        <Col xl={6}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About3;
