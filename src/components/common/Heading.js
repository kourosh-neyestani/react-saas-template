import React from "react";

function Heading(props) {
    const { h1, label, title, subtitle, position, className = "side", children } = props;
    return (
        <header className={`el-heading el-heading-${position || "side"} ${className}`}>
            {children}
            {label && <span className="el-heading-label">{label}</span>}
            {title && <h2>{title}</h2>}
            {h1 && <h1>{h1}</h1>}
            {subtitle && <p>{subtitle}</p>}
        </header>
    );
}

export default Heading;
