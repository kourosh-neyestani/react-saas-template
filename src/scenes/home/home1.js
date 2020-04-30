import React from "react";
import { Container, Row, Col } from "react-grid-system";

// Sections
import About from "../../sections/about/About";
import Plans from "../../sections/plans/Plans";
import Contact from "../../sections/contact/Contact";
import Portfolio from "../../sections/portfolio/Portfolio";

// Components
import Header from "../../components/header/Header";
import Heading from "../../components/common/Heading";

function Home1() {
    return (
        <>
            <Header />
            <div className="section section-hero section-hero-1">
                <Container>
                    <Row>
                        <Col xl={6}>
                            <div className="display-full-screen">
                                <div className="display-center">
                                    <Heading h1="Creating Easier Solutions" subtitle="Let's Work Together. We can help to develop your business. We provide the best service that comes with the best results." />
                                    <button type="button" className="button button-radius button-md button-primary">
                                        Sumbit Free Acount
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <div className="display-full-screen">
                                <div className="display-center text-right"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <About />
            <Portfolio />
            <Plans />
            <Contact />
        </>
    );
}

export default Home1;
