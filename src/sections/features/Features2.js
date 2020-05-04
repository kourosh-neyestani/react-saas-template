import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaUniversity, FaRegGem, FaBullhorn, FaChartLine, FaMobileAlt, FaDesktop } from "react-icons/fa";

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
];

function Features2() {
    return (
        <section className="section section-features section-features-2">
            <div className="display-spacing">
                <Container>
                    <Row className="mb--30">
                        <Col xl={6} className="column">
                            <div className="el-headline">
                                <h2>
                                    Explore by<span className="display-block">Job category</span>
                                </h2>
                                <p>
                                    Let's Work Together. We can help to develop your business.
                                    <br /> We provide the best service that comes with the best results.
                                </p>
                            </div>
                        </Col>
                        {featureList.map((value, index) => (
                            <Col xl={3} className="column">
                                <div className="card-item card-item-1">
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

export default Features2;
