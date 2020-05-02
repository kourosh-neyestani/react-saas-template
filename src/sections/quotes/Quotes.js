import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-grid-system";
import { FaQuoteRight } from "react-icons/fa";

function Quotes() {
    const sliderSettings = {
        nav: false,
        dots: true,
        speed: 500,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="section section-quotes section-quotes-1">
            <Container fluid>
                <Row>
                    <Col xl={6} className="bg-dark overlay-color overlay-pattern overlay-image  pr-0 pl-0" style={{ backgroundImage: `url(/assets/images/contact/1-1.jpg)` }}>
                        <span class="bg-pattern bg-pattern-3" />
                        <span class="bg-color bg-dark-70" />
                        <div className="display-table">
                            <div className="display-content">
                                <div className="max-w-576 div-center text-center">
                                    <div className="el-counter">
                                        <Row className="row-0">
                                            <Col xs={6} sm={6}>
                                                <span className="el-counter-count">780</span>
                                                <span className="el-counter-title">Projects</span>
                                            </Col>
                                            <Col xs={6} sm={6}>
                                                <span className="el-counter-count">69</span>
                                                <span className="el-counter-title">Projects</span>
                                            </Col>
                                            <Col xs={6} sm={6}>
                                                <span className="el-counter-count">570</span>
                                                <span className="el-counter-title">Projects</span>
                                            </Col>
                                            <Col xs={6} sm={6}>
                                                <span className="el-counter-count">360</span>
                                                <span className="el-counter-title">Projects</span>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} className="bg-primary pr-0 pl-0">
                        <div className="display-spacing">
                            <Slider {...sliderSettings} className="light">
                                <div className="slider-item">
                                    <div className="quote-item max-w-576 div-center text-center">
                                        <FaQuoteRight className="icon" />
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                            <div className="avatar">
                                                <img src="/assets/images/people/1.jpg" alt="alt" />
                                            </div>
                                            <h5>Rabie Maxwell</h5>
                                            <h6>My Customer</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="quote-item max-w-576 div-center text-center">
                                        <FaQuoteRight className="icon" />
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                            <div className="avatar">
                                                <img src="/assets/images/people/2.jpg" alt="alt" />
                                            </div>
                                            <h5>Rabie Maxwell</h5>
                                            <h6>My Customer</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="quote-item max-w-576 div-center text-center">
                                        <FaQuoteRight className="icon" />
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                            <div className="avatar">
                                                <img src="/assets/images/people/3.jpg" alt="alt" />
                                            </div>
                                            <h5>Rabie Maxwell</h5>
                                            <h6>My Customer</h6>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Quotes;
