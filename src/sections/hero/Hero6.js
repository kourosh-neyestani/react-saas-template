import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Components
import Shape from "../../components/common/Shape";
import Heading from "../../components/common/Heading";

function Hero() {
    return (
        <div className="section section-hero section-hero-6">
            <Shape className="el-shape-1 bg-color-1" size="xx" color="color-1" />
            <Shape className="el-shape-2 bg-color-2" size="lg" color="color-1" type="square"/>
            <Shape className="el-shape-3" size="md" color="color-3" type="triangle"/>
            <Container>
                <Row>
                    <Col xl={6}>
                        <div className="display-full-screen">
                            <div className="display-center">
                                <Heading h1="Creating Easier Solutions" subtitle="Let's Work Together. We can help to develop your business. We provide the best service that comes with the best results." />
                                <button type="button" className="button button-radius button-lg button-primary">
                                    Sumbit Free Acount
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ul className="mockups mockups-1">
                <li>
                    <div className="holder">
                        <img src="/assets/images/mockups/1.jpg" alt="Mockup" />
                    </div>
                </li>
                <li>
                    <div className="holder">
                        <img src="/assets/images/mockups/2.jpg" alt="Mockup" />
                    </div>
                </li>
                <li>
                    <div className="holder">
                        <img src="/assets/images/mockups/3.jpg" alt="Mockup" />
                    </div>
                </li>
                <li>
                    <div className="holder">
                        <img src="/assets/images/mockups/4.jpg" alt="Mockup" />
                    </div>
                </li>
            </ul>
            <ul className="mockups mockups-2">
                <li>
                    <div className="holder">
                        <img src="/assets/images/mockups/5.jpg" alt="Mockup" />
                    </div>
                </li>
                <li>
                    <div className="holder">
                        <img src="/assets/images/mockups/6.jpg" alt="Mockup" />
                    </div>
                </li>
                <li>
                    <div className="holder">
                        <img src="/assets/images/mockups/7.jpg" alt="Mockup" />
                    </div>
                </li>
                <li>
                    <div className="holder">
                        <img src="/assets/images/mockups/8.jpg" alt="Mockup" />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Hero;
