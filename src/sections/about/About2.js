import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaRegGem, FaRegEnvelope, FaRegCheckSquare, FaWineGlassAlt, FaUserSecret, FaUniversity, FaSyncAlt } from "react-icons/fa";

// Components
import Heading from "../../components/common/Heading";
import ProgressBar from "../../components/common/ProgressBar";

function About2() {
    return (
        <div className="section section-about section-about-2">
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
                                    Hello, I'm <br />
                                    Johnny Smith.
                                </h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About2;
