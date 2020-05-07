import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { FaArrowRight, FaUniversity, FaRegGem, FaBullhorn, FaChartLine, FaMobileAlt, FaDesktop, FaBullseye, FaHeart } from "react-icons/fa";

const serviceList = [
    {
        link: "/service-details",
        title: "Website Development",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaDesktop className="icon" />,
    },
    {
        link: "/service-details",
        title: "Mobile App Development",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaMobileAlt className="icon" />,
    },
    {
        link: "/service-details",
        title: "Marketing & Advertising",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaBullhorn className="icon" />,
    },
    {
        link: "/service-details",
        title: "Business Plan Strategy",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaChartLine className="icon" />,
    },
    {
        link: "/service-details",
        title: "Customer Satisfaction",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaUniversity className="icon" />,
    },
    {
        link: "/service-details",
        title: "Website Development",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaRegGem className="icon" />,
    },
    {
        link: "/service-details",
        title: "Marketing & Reporting",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaBullseye className="icon" />,
    },
    {
        link: "/service-details",
        title: "Social Media Management",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaHeart className="icon" />,
    },
];

function service() {
    return (
        <section className="section section-service section-service-3">
            <div className="display-spacing">
                <Container>
                    <header className="el-headline">
                        <h2>
                            Discover<span className="display-block">our Services</span>
                        </h2>
                        <p>
                            Let's Work Together. We can help to develop your business.
                            <br /> We provide the best service that comes with the best results.
                        </p>
                        <Link to={`/service`}>
                            <button type="button" className="el-headline-link">
                                <span>Explore More</span>
                                <FaArrowRight className="icon" />
                            </button>
                        </Link>
                    </header>
                    <Row className="mb--30">
                        {serviceList.map((value, index) => (
                            <Col xl={3} className="column" key={index}>
                                <Link to={value.link}>
                                    <div className="card-item">
                                        <button className="button button-circle button-icon-lg button-alt button-alt-primary">{value.icon}</button>
                                        <h3>{value.title}</h3>
                                        <p>{value.description}</p>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default service;
