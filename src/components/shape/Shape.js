import React from "react";

function Shape(props) {
    let newStyle = {};

    const { type = "circle", size = "sm", name = "none", angle = 0, color = "primary", className = "default" } = props;

    const switchSize = (value) => {
        let output;

        switch (value) {
            case "xs":
                output = 10;
                break;
            case "sm":
                output = 15;
                break;
            case "md":
                output = 20;
                break;
            case "lg":
                output = 25;
                break;
            case "xl":
                output = 30;
                break;
            case "xx":
                output = 45;
                break;
            default:
                break;
        }

        return output;
    };

    switch (type) {
        case "circle":
            newStyle = {
                width: switchSize(size),
                height: switchSize(size),
                display: `inline-block`,
                borderRadius: `50%`,
            };
            break;
        case "square":
            newStyle = {
                width: switchSize(size),
                paddingTop: `100%`,
            };
            break;
        default:
            newStyle = {
                opacity: 1,
            };
    }

    return <div className={`el-shape shape ${type} ${size} ${color} ${name} ${className}`} style={{ ...newStyle, transform: `rotate(${angle}deg)` }}></div>;
}

export default Shape;
