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
import Portfolio2 from "../../sections/portfolio/Portfolio2";
import Portfolio3 from "../../sections/portfolio/Portfolio3";
import Portfolio5 from "../../sections/portfolio/Portfolio5";

// Components
import Shape from "../../components/shape/Shape";
import Header from "../../components/header/Header";
import Heading from "../../components/common/Heading";

function Home1() {
    return (
        <>
            <div className="section section-hero section-hero-1 overlay-image">
                <Shape type="circle" size="xs" className="shadow-1 shape-1" />
                <Shape type="circle" size="sm" className="shadow-1 shape-2" />
                <Shape type="circle" size="md" className="shadow-1 shape-3" />
                <Shape type="circle" size="lg" className="shadow-1 shape-4" />
                <Shape type="circle" size="xl" className="shadow-1 shape-5" />
                <Shape type="circle" size="xx" className="shadow-1 shape-6" />
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
            <section>
                <div className="display-spacing">
                    <Shape type="circle" size="xs" className="shadow-1 shape-1" />
                    <Shape type="circle" size="sm" className="shadow-1 shape-2" />
                    <Shape type="circle" size="md" className="shadow-1 shape-3" />
                    <Shape type="circle" size="lg" className="shadow-1 shape-4" />
                    <Shape type="circle" size="xl" className="shadow-1 shape-5" />
                    <Shape type="circle" size="xx" className="shadow-1 shape-6" />
                    <hr />
                    <Shape type="square" size="xs" className="shadow-1 bg-color-1 shape-7" />
                    <Shape type="square" size="sm" className="shadow-1 bg-color-2 shape-" />
                    <Shape type="square" size="md" className="shadow-1 bg-color-3 shape-" />
                    <Shape type="square" size="lg" className="shadow-1 bg-color-4 shape-" />
                    <Shape type="square" size="xl" className="shadow-1 bg-color-5 shape-" />
                    <Shape type="square" size="xx" className="shadow-1 bg-color-6 shape-" />
                    <hr />
                    <Shape type="triangle" size="xx" color="color-6" />
                    <Shape type="triangle" size="xl" color="color-5" />
                    <Shape type="triangle" size="lg" color="color-4" />
                    <Shape type="triangle" size="md" color="color-3" />
                    <Shape type="triangle" size="sm" color="color-2" />
                    <Shape type="triangle" size="xs" color="color-1" />
                    <hr />
                </div>
            </section>
        </>
    );
}

export default Home1;
