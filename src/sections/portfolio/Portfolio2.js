import React from "react";
import Slider from "react-slick";
import { Container } from "react-grid-system";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Components

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
];

function Portfolio2() {
    const sliderSettings = {
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "120px",
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <section className="section section-portfolio section-portfolio-1">
            <div className="display-spacing">
                <Container>
                    <header className="el-headline">
                        <h2>Portfolio</h2>
                        <p>
                            Let's Work Together. We can help to develop your business.
                            <br /> We provide the best service that comes with the best results.
                        </p>
                        <button type="button" className="el-headline-link">
                            <span>Explore More</span>
                            <FaArrowRight className="icon" />
                        </button>
                    </header>

                    <Slider {...sliderSettings} className="el-slider-1 portfolio-carousel dark">
                        {portfolioList.map((value, index) => (
                            <div className="portfolio-item" key={index}>
                                <div className="image-holder">
                                    <div className="image overlay-image" style={{ backgroundImage: `url(${value.image})` }} />
                                </div>
                                <div className="content">
                                    <span>{value.tag}</span>
                                    <Link to={`/portfolio-details`}>
                                        <h3>{value.title}</h3>
                                        <button className="button button-md button-line-light">CASE STUDY</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </section>
    );
}

export default Portfolio2;
