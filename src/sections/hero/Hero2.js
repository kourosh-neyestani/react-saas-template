import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Components
import Heading from "../../components/common/Heading";

function Hero() {
    return (
        <div className="section section-hero section-hero-2">
            <div className="hero-image overlay-image" style={{ backgroundImage: `url(/assets/images/hero/2-1.jpg)` }} />
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="display-full-screen">
                            <div className="display-center">
                                <Heading className="max-w-768" h1={`Find the most Exciting Startup jobs`} subtitle="Let's Work Together. We can help to develop your business. We provide the best service that comes with the best results. We provide the best service that comes with the best results." />
                                <button type="button" className="button button-radius button-lg button-primary">
                                    Sumbit Free Acount
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
