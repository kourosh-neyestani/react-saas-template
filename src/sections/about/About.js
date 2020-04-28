import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Heading from "../../components/common/Heading";
import ProgressBar from "../../components/common/ProgressBar";

function About() {
    return (
        <div className="section section-about section-about-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Col xl={6}>
                            <Heading label="About Me" title="Our Professional Team gives you Best Service and Excellent Support." subtitle="We help to develop your business. We provide the best service that comes with the best results. We help to develop your business. We provide the best service that comes with the best results. Our strategies at work are the means by which to achieve the desired goals." />
                            <ProgressBar min="0" max="100" percent={75} label="Creativity" />
                            <ProgressBar min="0" max="100" percent={75} label="Team Work" />
                            <ProgressBar min="0" max="100" percent={95} label="Design Creation" />
                            <ProgressBar min="0" max="100" percent={95} label="Marketing online" />
                        </Col>
                        <Col xl={6}>
                            <div class="about-us-box overlay-pattern">
                                <div className="image" style={{ backgroundImage: `url(/assets/images/about/1-1.jpg)` }}></div>
                                <span class="shape-1" />
                                <span class="shape-2" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About;
