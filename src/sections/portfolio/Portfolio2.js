import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { FaArrowRight } from "react-icons/fa";

function Portfolio2() {
    return (
        <section className="section section-portfolio section-portfolio-3">
            <div className="display-spacing">
                <Container>
                    <header className="el-headline">
                        <h2>
                            Discover<span className="display-block">our Portfolio</span>
                        </h2>
                        <button type="button" className="el-headline-link">
                            <span>Explore More</span>
                            <FaArrowRight className="icon" />
                        </button>
                    </header>
                </Container>
            </div>
        </section>
    );
}

export default Portfolio2;
