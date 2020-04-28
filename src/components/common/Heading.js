import React from "react";

function Heading(props) {
    const { h1, label, title, subtitle, position } = props;
    return (
        <div className={`el-heading el-heading-${position || 'side'}`}>
            <div class="el-heading-label">{label && <span>{label}</span>}</div>
            <div class="el-heading-title">
                {title && <h2>{title}</h2>}
                {h1 && <h1>{h1}</h1>}
            </div>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export default Heading;
