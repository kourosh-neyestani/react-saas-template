import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Slider1(props) {
    const { className, children } = props;

    const sliderSettings = {
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <Slider {...sliderSettings} className={className}>
            {children}
        </Slider>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;

    return (
        <button type="button" className="button button-arrow button-arrow-left" style={{ ...style }} onClick={onClick}>
            <FaArrowLeft className="arrow arrow-left" />
        </button>
    );
}

function SampleNextArrow(props) {
    const { style, onClick } = props;

    return (
        <button type="button" className="button button-arrow button-arrow-right" style={{ ...style }} onClick={onClick}>
            <FaArrowRight className="arrow arrow-right" />
        </button>
    );
}
