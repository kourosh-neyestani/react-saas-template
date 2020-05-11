import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Headline(props) {
    const { label, title, link, subtitle, position, className, t1, t2 } = props;
    return (
        <header className={`el-headline ${position || "side"} ${className}`}>
            <div className="el-headline-label">{label && <span>{label}</span>}</div>
            <div className="el-headline-title">{title && <h2>{title}</h2>}</div>
            {t1 && (
                <h2>
                    {t1}
                    {t2 && <span className="display-block">{t2}</span>}
                </h2>
            )}
            {link && (
                <Link to={link}>
                    <button type="button" className="el-headline-link">
                        <span>Explore More</span>
                        <FaArrowRight className="icon" />
                    </button>
                </Link>
            )}
            {subtitle && <p>{subtitle}</p>}
        </header>
    );
}

export default Headline;
