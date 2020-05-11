import React from "react";

// Components
import Header from "../../components/header/Header";

// Sections
import Hero from "../../sections/hero/Hero";
import About from "../../sections/about/About";
import About2 from "../../sections/about/About2";
import About3 from "../../sections/about/About3";
import Contact from "../../sections/contact/Contact";
import Plans from "../../sections/plans/Plans";
import Quotes from "../../sections/quotes/Quotes";
import Quotes2 from "../../sections/quotes/Quotes2";
import Portfolio from "../../sections/portfolio/Portfolio";
import Portfolio2 from "../../sections/portfolio/Portfolio2";
import Portfolio3 from "../../sections/portfolio/Portfolio3";
import Portfolio5 from "../../sections/portfolio/Portfolio5";


export default (props) => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <About2 />
            <About3 />
            <Contact />
            <Plans />
            <Quotes />
            <Quotes2 />
            <Portfolio />
            <Portfolio2 />
            <Portfolio3 />
            <Portfolio5 />
        </>
    );
};
