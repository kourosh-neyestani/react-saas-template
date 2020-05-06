import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaArrowRight, FaSyncAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const portfolioList = [
    {
        tag: "Development",
        title: "Best product landing page built with ReactJS",
        image: "/assets/images/portfolio/2-1.jpg",
    },
    {
        tag: "Development",
        title: "Best product landing page built with ReactJS",
        image: "/assets/images/portfolio/2-2.jpg",
    },
    {
        tag: "Development",
        title: "Multi-Purpose website built with ReactJS",
        image: "/assets/images/portfolio/2-3.jpg",
    },
    {
        tag: "Development",
        title: "Creative Agency & Business HTML Template",
        image: "/assets/images/portfolio/2-4.jpg",
    },
    {
        tag: "Development",
        title: "Best portfolio template built with ReactJS",
        image: "/assets/images/portfolio/2-5.jpg",
    },
    {
        tag: "Development",
        title: "The personal template built with ReactJS",
        image: "/assets/images/portfolio/2-6.jpg",
    },
];

function Portfolio() {
    return (
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container>
                    <header className="el-headline">
                        <h2>
                            Discover<span className="display-block">our Portfolio</span>
                        </h2>
                        <button type="button" className="el-headline-link">
                            <span>Explore More</span>
                            <FaArrowRight className="icon" />
                        </button>
                    </header>
                    <Row>
                        {portfolioList.map((value, index) => (
                            <Col xl={4} key={index}>
                                <div className="portfolio-item mb-30">
                                    <div className="image-holder">
                                        <div className="image overlay-image" style={{ backgroundImage: `url(${value.image})` }} />
                                    </div>
                                    <div className="content">
                                        <span>{value.tag}</span>
                                        <Link to={`/portfolio-details`}>
                                            <h3>{value.title}</h3>
                                            <button className="button button-lg button-line-light">CASE STUDY</button>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="div-center text-center pt-30">
                        <Link to={`/portfolio`}>
                            <button className="button button-circle button-icon-xl button-alt button-alt-primary button-more button-wave" type="button">
                                <FaSyncAlt className="icon" />
                                <span className="hover-wave" />
                            </button>
                        </Link>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Portfolio;
