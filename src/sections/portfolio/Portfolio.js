import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoIosArrowRoundForward, IoMdSearch } from "react-icons/io";

// Components
import Heading from "../../components/common/Heading";

function Portfolio() {
    return (
        <div className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container>
                    <Heading position="center" label="Portfolio" title="Our Best Popular Services for your Successful Business." subtitle="" />
                    <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
                        <TabList className="el-tabs-links">
                            <Tab>All Works</Tab>
                            <Tab>Web Design</Tab>
                            <Tab>Mobile Apps</Tab>
                            <Tab>Branding</Tab>
                            <li className="read-more">
                                More Portfolio <IoIosArrowRoundForward className="read-more-icon" />
                            </li>
                        </TabList>
                        <TabPanel>
                            <Row className="mb--30">
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
                            <Row className="mb--30">
                                <Item title="Crearive Design" subtitle="Web Design" image="/assets/images/portfolio/1-1.jpg" />
                                <Item title="Crearive Design" subtitle="Web Design" image="/assets/images/portfolio/1-4.jpg" />
                                <Item title="Crearive Design" subtitle="Web Design" image="/assets/images/portfolio/1-7.jpg" />
                            </Row>
                        </TabPanel>
                        <TabPanel>
                            <Row className="mb--30">
                                <Item title="Crearive Design" subtitle="Mobile Apps" image="/assets/images/portfolio/1-2.jpg" />
                                <Item title="Crearive Design" subtitle="Mobile Apps" image="/assets/images/portfolio/1-5.jpg" />
                                <Item title="Crearive Design" subtitle="Mobile Apps" image="/assets/images/portfolio/1-8.jpg" />
                            </Row>
                        </TabPanel>
                        <TabPanel>
                            <Row className="mb--30">
                                <Item title="Crearive Design" subtitle="Branding" image="/assets/images/portfolio/1-3.jpg" />
                                <Item title="Crearive Design" subtitle="Branding" image="/assets/images/portfolio/1-6.jpg" />
                            </Row>
                        </TabPanel>
                    </Tabs>
                </Container>
            </div>
        </div>
    );

    function Item(props) {
        const { title, subtitle, image } = props;
        return (
            <Col xs={6} sm={6} md={4} lg={3} xl={3}>
                <div className="portfolio-item">
                    <div className="portfolio-image overlay-image" style={{ backgroundImage: `url(${image})` }} />
                    <div className="portfolio-info">
                        <div className="portfolio-link">
                            <a href="/assets/images/portfolio/1-1.jpg" className="button button-circle button-circle-md button-light text-primary">
                                <IoMdSearch className="icon" />
                            </a>
                        </div>
                        <p>{title}</p>
                        <h4>{subtitle}</h4>
                    </div>
                </div>
            </Col>
        );
    }
}

export default Portfolio;
