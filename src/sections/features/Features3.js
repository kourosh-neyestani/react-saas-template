import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaRegGem, FaRegEnvelope, FaRegCheckSquare, FaWineGlassAlt, FaUserSecret, FaUniversity, FaArrowRight } from "react-icons/fa";

function Features3() {
    return (
        <section className="section section-features section-features-3">
            <div className="display-spacing">
                <Container>
                    <header className="el-headline">
                        <h2>
                            Explore by <span className="display-block">our Category</span>
                        </h2>
                        <button type="button" className="el-headline-link">
                            <span>Explore More</span>
                            <FaArrowRight className="icon" />
                        </button>
                    </header>
                    <Row className="mb--30">
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

export default Features3;
