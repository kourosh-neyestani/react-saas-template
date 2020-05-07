import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { FaUniversity, FaRegGem, FaBullhorn, FaChartLine, FaMobileAlt, FaDesktop } from "react-icons/fa";

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
];

function Service() {
    return (
        <div className="section section-service section-service-1">
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
                                    Discover<span className="display-block">our Services</span>
                                </h2>
                                <p>
                                    Let's Work Together. We can help to develop your business. <br /> We provide the best service that comes with the best results.
                                </p>
                            </div>
                            <Row className="mb--45">
                                {serviceList.map((value, index) => (
                                    <Col xl={4} key={index}>
                                        <Link to={value.link}>
                                            <div className="card-item">
                                                <button className="button button-icon-md button-alt button-alt-primary">{value.icon}</button>
                                                <h3>{value.title}</h3>
                                                <p>{value.description}</p>
                                            </div>
                                        </Link>
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

export default Service;
