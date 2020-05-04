import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaArrowRight, FaUniversity, FaRegGem, FaBullhorn, FaChartLine, FaMobileAlt, FaDesktop, FaBullseye, FaHeart } from "react-icons/fa";

const featureList = [
    {
        title: "Website Development",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaDesktop className="icon" />,
    },
    {
        title: "Mobile App Development",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaMobileAlt className="icon" />,
    },
    {
        title: "Marketing & Advertising",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaBullhorn className="icon" />,
    },
    {
        title: "Business Plan Strategy",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaChartLine className="icon" />,
    },
    {
        title: "Customer Satisfaction",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaUniversity className="icon" />,
    },
    {
        title: "Website Development",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaRegGem className="icon" />,
    },
    {
        title: "Marketing & Reporting",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaBullseye className="icon" />,
    },
    {
        title: "Social Media Management",
        description: "Lorem ipsum dolor sit amet consectetur",
        icon: <FaHeart className="icon" />,
    },
];

function Features3() {
    return (
        <section className="section section-features section-features-3">
            <div className="display-spacing">
                <Container>
                    <header className="el-headline">
                        <h2>
                            Discover<span className="display-block">our Services</span>
                        </h2>
                        <button type="button" className="el-headline-link">
                            <span>Explore More</span>
                            <FaArrowRight className="icon" />
                        </button>
                    </header>
                    <Row className="mb--30">
                        {featureList.map((value, index) => (
                            <Col xl={3} className="column" key={index}>
                                <div className="card-item">
                                    <button className="button button-circle button-icon-lg button-alt button-alt-primary">{value.icon}</button>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Features3;
