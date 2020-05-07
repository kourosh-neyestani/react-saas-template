import React from "react";

// Components
import Header from "../../components/header/Header";

// Sections
import Hero from "../../sections/hero/Hero";
import Service2 from "../../sections/service/Service2";

export default (props) => {
    return (
        <>
            <Header />
            <Hero></Hero>
            <Service2 />
        </>
    );
};
