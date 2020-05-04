import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Container, Row, Col } from "react-grid-system";

// Components
import Slider1 from "../../components/common/Slider1";
import Heading from "../../components/common/Heading";
import ProgressBar from "../../components/common/ProgressBar";

function Quotes2() {
    return (
        <div className="section section-testimonial section-testimonial-2">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Col xl={5}>
                            <div className="testimonial-image">
                                <div className="circle">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(/assets/images/testimonial/2.jpg)` }}></div>
                                </div>
                                <FaQuoteLeft className="icon" />
                            </div>
                        </Col>
                        <Col xl={7}>
                            <div className="el-headline">
                                <h2>
                                    What our<span className="display-block">Clients say</span>
                                </h2>
                            </div>
                            <Slider1 className="el-slider-1">
                                <div className="testimonial-item">
                                    <div>
                                        <img src="/assets/images/people/1.jpg" alt="Avatar" />
                                        <span className="name">Rabie Maxwell</span>
                                        <span className="role">Owner & Design Lead</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="testimonial-item">
                                    <div>
                                        <img src="/assets/images/people/2.jpg" alt="Avatar" />
                                        <span className="name">Antonio Mirangle</span>
                                        <span className="role">Owner & Design Lead</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="testimonial-item">
                                    <div>
                                        <img src="/assets/images/people/3.jpg" alt="Avatar" />
                                        <span className="name">Antonio Mirangle</span>
                                        <span className="role">Owner & Design Lead</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </Slider1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Quotes2;
