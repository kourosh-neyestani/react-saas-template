import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Components
import Heading from "../../components/common/Heading";

function Contact() {
    return (
        <section className="section section-contact section-contact-1">
            <Container fluid>
                <Row>
                    <Col xl={6} className="bg-primary pr-0 pl-0">
                        <div className="display-spacing">
                            <div className="max-w-576 div-center">
                                <Heading title="Meet our Professional Members & Expert Instructors." subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." />
                                <form className="form form-2">
                                    <Row className="row-sm">
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item form-item-input">
                                                <input type="text" id="form-item-name" placeholder="Name" />
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={6}>
                                            <div className="form-item form-item-input">
                                                <input type="email" id="form-item-email" placeholder="E-Mail" />
                                                <label htmlFor="form-item-email"></label>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <textarea id="form-item-message" placeholder="Message"></textarea>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} md={12}>
                                            <div className="form-item">
                                                <button className="button button-md button-radius button-line-light">Send Message</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} className="bg-dark overlay-color overlay-pattern overlay-image  pr-0 pl-0" style={{ backgroundImage: `url(/assets/images/contact/1-1.jpg)` }}>
                        <span className="bg-color bg-dark-70" />
                        <span className="bg-pattern bg-pattern-3" />
                        <div className="display-spacing"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
