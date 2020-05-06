import React from "react";
import Portfolio from "../sections/portfolio/Portfolio";
import Portfolio2 from "../sections/portfolio/Portfolio2";
import Portfolio3 from "../sections/portfolio/Portfolio3";
import Portfolio5 from "../sections/portfolio/Portfolio5";

export default function Headline() {
    return (
        <>
            <section className="section">
                <div className="display-spacing">
                    <Portfolio />
                    <Portfolio2 />
                    <Portfolio3 />
                    <Portfolio5 />
                </div>
            </section>
        </>
    );
}
