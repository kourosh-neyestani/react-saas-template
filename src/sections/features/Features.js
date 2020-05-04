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

function Features() {
    return (
        <div className="section section-features section-features-1">
            <div className="display-spacing">
                <Container>
                    <Row>
                        <Col xl={5}>
                            <div className="el-frame el-frame-1">
                                <div className="el-frame-image" style={{ backgroundImage: `url(/assets/images/services/1-1.jpg)` }}></div>
                            </div>
                        </Col>
                        <Col xl={7}>
                            <div className="el-headline">
                                <h2>
                                    Explore <br /> by category
                                </h2>
                            </div>
                            <Row className="mb--45">
                                {featureList.map((value, index) => (
                                    <Col xl={4} key={index}>
                                        <div className="card-item">
                                        <button className="button button-icon-md button-alt button-alt-primary">{value.icon}</button>
                                            <h3>{value.title}</h3>
                                            <p>{value.description}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Features;
