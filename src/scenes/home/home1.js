import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaArrowRight } from "react-icons/fa";

// Sections
import About from "../../sections/about/About";
import About2 from "../../sections/about/About2";
import Plans from "../../sections/plans/Plans";
import Quotes from "../../sections/quotes/Quotes";
import Quotes2 from "../../sections/quotes/Quotes2";
import Contact from "../../sections/contact/Contact";
import Features from "../../sections/features/Features";
import Features2 from "../../sections/features/Features2";
import Features3 from "../../sections/features/Features3";
import Portfolio from "../../sections/portfolio/Portfolio";

// Components
import Header from "../../components/header/Header";
import Heading from "../../components/common/Heading";

function Home1() {
    return (
        <>
            <Header />
            <div className="section section-hero section-hero-1 overlay-image" style={{ backgroundImage: `url(/assets/images/hero-1-1.jpg)` }}>
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
                                <div className="display-center text-right"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <About />
            <About2 />
            <Plans />
            <Quotes />
            <Quotes2 />
            <Contact />
            <Portfolio />
            <Features />
            <Features2 />
            <Features3 />
        </>
    );
}

export default Home1;
