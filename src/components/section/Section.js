import React from "react";

function Section(props) {
    const { className } = props;

    return (
        <section className={`section section-${className}`}>
            <div className="display-spacing">
                
            </div>
        </section>
    );
}

export default Section;
