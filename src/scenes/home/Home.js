import React from "react";

// Components
import Header from "../../components/header/Header";

// Sections
import Hero from "../../sections/hero/Hero";
import Service from "../../sections/service/Service";

export default (props) => {
    return (
        <>
            <Header />
            <Hero />
            <Service />
        </>
    );
};
