import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaRegGem, FaRegEnvelope, FaRegCheckSquare, FaWineGlassAlt, FaUserSecret, FaUniversity, FaSyncAlt } from "react-icons/fa";

// Components
import Heading from "../../components/common/Heading";
import ProgressBar from "../../components/common/ProgressBar";

function Features() {
    return (
        <div className="section section-features section-features-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Col xl={5}>
                            <div className="el-frame el-frame-1">
                                <div className="el-frame-image" style={{ backgroundImage: `url(/assets/images/services/1-1.jpg)` }}></div>
                            </div>
                        </Col>
                        <Col xl={7}>
                            <div className="el-headline">
                                <h2>
                                    Explore <br /> by category
                                </h2>
                            </div>
                            <Row className="mb--45">
                                <Col xl={4}>
                                    <div className="card-item card-item-1">
                                        <button type="button" className="button button-icon-md button-alt button-alt-primary">
                                            <FaRegGem className="icon" />
                                        </button>
                                        <h3>Business development</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="card-item card-item-2">
                                        <button type="button" className="button button-icon-md button-alt button-alt-primary">
                                            <FaRegEnvelope className="icon" />
                                        </button>
                                        <h3>Customer satisfaction</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="card-item card-item-3">
                                        <button type="button" className="button button-icon-md button-alt button-alt-primary">
                                            <FaRegCheckSquare className="icon" />
                                        </button>
                                        <h3>Marketing & communications</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="card-item card-item-4">
                                        <button type="button" className="button button-icon-md button-alt button-alt-primary">
                                            <FaWineGlassAlt className="icon" />
                                        </button>
                                        <h3>Design</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="card-item card-item-5">
                                        <button type="button" className="button button-icon-md button-alt button-alt-primary">
                                            <FaUserSecret className="icon" />
                                        </button>
                                        <h3>Finance</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="card-item card-item-6">
                                        <button type="button" className="button button-icon-md button-alt button-alt-primary">
                                            <FaUniversity className="icon" />
                                        </button>
                                        <h3>Sales</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Features;
