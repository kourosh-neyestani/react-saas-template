import React from "react";
import { Container } from "react-grid-system";
import { FaArrowRight } from "react-icons/fa";

import Features from "../sections/features/Features";
import Features2 from "../sections/features/Features2";
import Features3 from "../sections/features/Features3";

export default function Headline() {
    return (
        <>
            <Features />
            <Features2 />
            <Features3 />
        </>
    );
}
