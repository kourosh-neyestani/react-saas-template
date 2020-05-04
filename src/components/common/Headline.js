import React from "react";

function Headline(props) {
    const { label, title, subtitle, position, className, t1, t2 } = props;
    return (
        <header className={`el-headline el-headline-${position || "side"} ${className}`}>
            <div className="el-headline-label">{label && <span>{label}</span>}</div>
            <div className="el-headline-title">{title && <h2>{title}</h2>}</div>
            {t1 && (
                <h2>
                    {t1}
                    {t2 && <span className="display-block">{t2}</span>}
                </h2>
            )}
            {subtitle && <p>{subtitle}</p>}
        </header>
    );
}

export default Headline;
