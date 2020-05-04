import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaRegGem, FaRegEnvelope, FaRegCheckSquare, FaWineGlassAlt, FaUserSecret, FaUniversity } from "react-icons/fa";

function Features2() {
    return (
        <section className="section section-features section-features-2">
            <div className="display-spacing">
                <Container>
                    <Row className="mb--30">
                        <Col xl={6} className="column">
                            <div className="el-headline">
                                <h2>
                                    Explore by<span className="display-block">Job category</span>
                                </h2>
                                <p>
                                    Let's Work Together. We can help to develop your business.
                                    <br /> We provide the best service that comes with the best results.
                                </p>
                            </div>
                        </Col>
                        <Col xl={3} className="column">
                            <div className="card-item card-item-1">
                                <div className="icon-holder button-alt button-alt-primary button-alt-1">
                                    <FaRegGem className="icon" />
                                </div>
                                <h3>
                                    Design & <span className="display-block">Development</span>
                                </h3>
                                <span className="subtitle">15k job voccary</span>
                            </div>
                        </Col>
                        <Col xl={3} className="column">
                            <div className="card-item card-item-1">
                                <div className="icon-holder button-alt button-alt-primary button-alt-2">
                                    <FaRegEnvelope className="icon" />
                                </div>
                                <h3>
                                    Design & <span className="display-block">Development</span>
                                </h3>
                                <span className="subtitle">15k job voccary</span>
                            </div>
                        </Col>
                        <Col xl={3} className="column">
                            <div className="card-item card-item-1">
                                <div className="icon-holder button-alt button-alt-primary button-alt-3">
                                    <FaRegCheckSquare className="icon" />
                                </div>
                                <h3>
                                    Design & <span className="display-block">Development</span>
                                </h3>
                                <span className="subtitle">15k job voccary</span>
                            </div>
                        </Col>
                        <Col xl={3} className="column">
                            <div className="card-item card-item-1">
                                <div className="icon-holder button-alt button-alt-primary button-alt-4">
                                    <FaWineGlassAlt className="icon" />
                                </div>
                                <h3>
                                    Design & <span className="display-block">Development</span>
                                </h3>
                                <span className="subtitle">15k job voccary</span>
                            </div>
                        </Col>
                        <Col xl={3} className="column">
                            <div className="card-item card-item-1">
                                <div className="icon-holder button-alt button-alt-primary button-alt-5">
                                    <FaUserSecret className="icon" />
                                </div>
                                <h3>
                                    Design & <span className="display-block">Development</span>
                                </h3>
                                <span className="subtitle">15k job voccary</span>
                            </div>
                        </Col>
                        <Col xl={3} className="column">
                            <div className="card-item card-item-1">
                                <div className="icon-holder button-alt button-alt-primary button-alt-6">
                                    <FaUniversity className="icon" />
                                </div>
                                <h3>
                                    Design & <span className="display-block">Development</span>
                                </h3>
                                <span className="subtitle">15k job voccary</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Features2;
