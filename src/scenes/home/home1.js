import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Header from "../../components/header/Header";

function Home1() {
    return (
        <>
            <Header />
            <div className="section section-hero section-hero-1">
                <div className="hero-entry">
                    <Container>
                        <Row>
                            <Col xl={6} className="display-full-screen">
                                <div className="display-center">
                                    <div className="el-title">
                                        <span className="label text-primary">I'am Andre Versache</span>
                                        <h1>Creating Easier Solutions</h1>
                                        <p>Let's Work Together. We can help to develop your business. We provide the best service that comes with the best results.</p>
                                        <a href="http://" className="button button-radius button-md button-primary">Sumbit Free Acount</a>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} className="display-full-screen">
                                <div className="display-center text-right">
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Home1;
