import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaRegPaperPlane } from "react-icons/fa";

function Portfolio() {
    return (
        <section className="section section-portfolio section-portfolio-5">
            <div className="display-spacing">
                <Container>
                    <header className="el-headline center">
                        <h2>
                            Explore<span className="display-block">Latest Works</span>
                        </h2>
                        <p>
                            Let's Work Together. We can help to develop your business. <br />
                            We provide the best service that comes with the best results.
                        </p>
                    </header>
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            <Tab>All Works</Tab>
                            <Tab>Web Design</Tab>
                            <Tab>Mobile Apps</Tab>
                            <Tab>Branding</Tab>
                        </TabList>
                        <TabPanel>
                            <Row className="row mb--30">
                                <Item title="Crearive Design" subtitle="Web Design" image="/assets/images/portfolio/1-1.jpg" />
                                <Item title="Crearive Design" subtitle="Mobile Apps" image="/assets/images/portfolio/1-2.jpg" />
                                <Item title="Crearive Design" subtitle="Branding" image="/assets/images/portfolio/1-3.jpg" />
                                <Item title="Crearive Design" subtitle="Web Design" image="/assets/images/portfolio/1-4.jpg" />
                                <Item title="Crearive Design" subtitle="Mobile Apps" image="/assets/images/portfolio/1-5.jpg" />
                                <Item title="Crearive Design" subtitle="Branding" image="/assets/images/portfolio/1-6.jpg" />
                                <Item title="Crearive Design" subtitle="Web Design" image="/assets/images/portfolio/1-7.jpg" />
                                <Item title="Crearive Design" subtitle="Mobile Apps" image="/assets/images/portfolio/1-8.jpg" />
                            </Row>
                        </TabPanel>
                        <TabPanel>
                            <Row className="row mb--30">
                                <Item title="Crearive Design" subtitle="Web Design" image="/assets/images/portfolio/1-1.jpg" />
                                <Item title="Crearive Design" subtitle="Web Design" image="/assets/images/portfolio/1-4.jpg" />
                                <Item title="Crearive Design" subtitle="Web Design" image="/assets/images/portfolio/1-7.jpg" />
                            </Row>
                        </TabPanel>
                        <TabPanel>
                            <Row className="row mb--30">
                                <Item title="Crearive Design" subtitle="Mobile Apps" image="/assets/images/portfolio/1-2.jpg" />
                                <Item title="Crearive Design" subtitle="Mobile Apps" image="/assets/images/portfolio/1-5.jpg" />
                                <Item title="Crearive Design" subtitle="Mobile Apps" image="/assets/images/portfolio/1-8.jpg" />
                            </Row>
                        </TabPanel>
                        <TabPanel>
                            <Row className="row mb--30">
                                <Item title="Crearive Design" subtitle="Branding" image="/assets/images/portfolio/1-3.jpg" />
                                <Item title="Crearive Design" subtitle="Branding" image="/assets/images/portfolio/1-6.jpg" />
                            </Row>
                        </TabPanel>
                    </Tabs>
                </Container>
            </div>
        </section>
    );

    function Item(props) {
        const { title, subtitle, image, link } = props;
        return (
            <Col xs={6} sm={6} md={4} lg={3} xl={3}>
                <div className="portfolio-item">
                    <div className="portfolio-card">
                        <div className="image overlay-image" style={{ backgroundImage: `url(${image})` }} />
                        <div className="content">
                            <Link to={`/portfolio-details`}>
                                <span>{title}</span>
                                <h3>{subtitle}</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Portfolio;
