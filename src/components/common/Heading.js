import React from "react";

function Heading(props) {
    const { h1, label, title, subtitle, position, className } = props;
    return (
        <div className={`el-heading el-heading-${position || "side"} ${className}`}>
            <div className="el-heading-label">{label && <span>{label}</span>}</div>
            <div className="el-heading-title">
                {title && <h2>{title}</h2>}
                {h1 && <h1>{h1}</h1>}
            </div>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export default Heading;
