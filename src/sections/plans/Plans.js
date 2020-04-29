import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaCheck, FaTimes } from 'react-icons/fa'

// Components
import Heading from "../../components/common/Heading";

function About() {
    return (
        <div className="section section-plans section-plans-1 overlay-pattern">
            <span className="bg-pattern bg-patline-1"></span>
            <div className="display-spacing">
                <Heading position="center" label="About Me" title="Our Professional Team gives you Best Service and Excellent Support." />
                <Container>
                    <Row>
                        <Col xl={4}>
                            <div className="price-item">
                                <h4 className="text-primary">Starter</h4>
                                <div className="price-tag">
                                    <div className="price">
                                        <h3 className="currency">
                                            <span className="sign">$</span>18.0 
                                        </h3>
                                        <span className="month">Month</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  labore et dolore magna aliqua.</p>
                                </div>
                                <ul>
                                    <li><FaCheck className="icon true"/> 5GB Storage Space</li>
                                    <li><FaCheck className="icon true"/> 20GB Monthly Bandwidth</li>
                                    <li><FaTimes className="icon false"/> My SQL Databases</li>
                                    <li><FaTimes className="icon false"/> 100 Email Account</li>
                                    <li><FaTimes className="icon false"/> 10 Free Domain Names</li>
                                </ul>
                                <button type="button" className="button button-block button-md button-radius button-primary">BUY NOW</button>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="price-item">
                                <h4>Premium</h4>
                                <div className="price-tag">
                                    <div className="price">
                                        <h3 className="currency">
                                            <span className="sign">$</span>36.0 
                                        </h3>
                                        <span className="month">Month</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  labore et dolore magna aliqua.</p>
                                </div>
                                <ul>
                                    <li><FaCheck className="icon true"/> 5GB Storage Space</li>
                                    <li><FaCheck className="icon true"/> 20GB Monthly Bandwidth</li>
                                    <li><FaCheck className="icon true"/> My SQL Databases</li>
                                    <li><FaCheck className="icon true   "/> 100 Email Account</li>
                                    <li><FaTimes className="icon false"/> 10 Free Domain Names</li>
                                </ul>
                                <button type="button" className="button button-block button-md button-radius button-dark">BUY NOW</button>
                            </div>
                        </Col>
                        <Col xl={4}>
                            <div className="price-item">
                                <h4 className="text-primary">Ultimate</h4>
                                <div className="price-tag">
                                    <div className="price">
                                        <h3 className="currency">
                                            <span className="sign">$</span>72.0 
                                        </h3>
                                        <span className="month">Month</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  labore et dolore magna aliqua.</p>
                                </div>
                                <ul>
                                    <li><FaCheck className="icon true"/> 5GB Storage Space</li>
                                    <li><FaCheck className="icon true"/> 20GB Monthly Bandwidth</li>
                                    <li><FaCheck className="icon true"/> My SQL Databases</li>
                                    <li><FaCheck className="icon true"/> 100 Email Account</li>
                                    <li><FaCheck className="icon true"/> 10 Free Domain Names</li>
                                </ul>
                                <button type="button" className="button button-block button-md button-radius button-primary">BUY NOW</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About;
