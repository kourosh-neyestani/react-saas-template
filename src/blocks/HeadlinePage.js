import React from "react";
import { Container } from "react-grid-system";
import { FaArrowRight } from "react-icons/fa";

export default function Headline() {
    return (
        <>
            <section className="section">
                <div className="display-spacing">
                    <Container>
                        <header className="el-headline">
                            <h2>
                                Explore by <span className="display-block">Our Category</span>
                            </h2>
                            <button type="button" className="el-headline-link">
                                <span>Explore More</span>
                                <FaArrowRight className="icon" />
                            </button>
                        </header>
                    </Container>
                </div>
            </section>
            <section className="section">
                <div className="display-spacing">
                    <Container>
                        <header className="el-headline">
                            <h2>Testimonal</h2>
                            <p>
                                Let's Work Together. We can help to develop your business.
                                <br /> We provide the best service that comes with the best results.
                            </p>
                            <button type="button" className="el-headline-link">
                                <span>Explore More</span>
                                <FaArrowRight className="icon" />
                            </button>
                        </header>
                    </Container>
                </div>
            </section>
            <section className="section">
                <div className="display-spacing">
                    <Container>
                        <header className="el-headline center">
                            <h2>Testimonal</h2>
                            <p>
                                Let's Work Together. We can help to develop your business.
                                <br /> We provide the best service that comes with the best results.
                            </p>
                            <button type="button" className="el-headline-link">
                                <span>Explore More</span>
                                <FaArrowRight className="icon" />
                            </button>
                        </header>
                    </Container>
                </div>
            </section>
            <section className="section">
                <div className="display-spacing">
                    <Container>
                        <header className="el-headline center">
                            <h2>
                                Explore by <span className="display-block">Our Category</span>
                            </h2>
                            <p>
                                Let's Work Together. We can help to develop your business.
                                <br /> We provide the best service that comes with the best results.
                            </p>
                            <button type="button" className="el-headline-link">
                                <span>Explore More</span>
                                <FaArrowRight className="icon" />
                            </button>
                        </header>
                    </Container>
                </div>
            </section>
            <section className="section">
                <div className="display-spacing">
                    <Container>
                        <header className="el-headline center">
                            <h2>
                                Explore by <span className="display-block">Our Category</span>
                            </h2>
                            <button type="button" className="el-headline-link">
                                <span>Explore More</span>
                                <FaArrowRight className="icon" />
                            </button>
                        </header>
                    </Container>
                </div>
            </section>
        </>
    );
}
