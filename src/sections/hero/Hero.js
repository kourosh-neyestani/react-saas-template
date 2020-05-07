import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Components
import Heading from "../../components/common/Heading";

function Hero() {
    return (
        <div className="section section-hero section-hero-1 overlay-image" style={{ backgroundImage: `url(/assets/images/hero/1-1.jpg)` }}>
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
                    <Col xl={6}>
                        <div className="display-full-screen">
                            <div className="display-center text-right">
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
