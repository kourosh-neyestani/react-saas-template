import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-grid-system";

// Components
import Shape from "../../components/common/Shape";
import Heading from "../../components/common/Heading";

function Hero() {
    const sliderSettings = {
        dots: false,
        speed: 500,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div className="section section-hero section-hero-1">
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
                        <div className="display-center">
                            <div className="hero-entry">
                                <div class="el-mobile el-mobile-1">
                                    <Slider className="el-slider" {...sliderSettings}>
                                        <img src="/assets/images/mockups/phone-1.jpg" alt="Mocup" />
                                        <img src="/assets/images/mockups/phone-2.jpg" alt="Mocup" />
                                        <img src="/assets/images/mockups/phone-3.jpg" alt="Mocup" />
                                    </Slider>
                                    <div className="el-mobile-frame" style={{ backgroundImage: `url(/assets/images/frames/phone-1.png)` }} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
