import React, { Fragment } from "react";

const demos = [
    {
        link: "home-1",
        image: "home-1.jpg",
        title: "Home 1",
        subtitle: "Subtitle 1",
    },
    {
        link: "home-2",
        image: "home-2.jpg",
        title: "Home 2",
        subtitle: "Subtitle 2",
    },
];

const blocks = [
    {
        link: "titles",
        title: "Headline",
    },
    {
        link: "features",
        title: "features",
    },
    {
        link: "about",
        title: "about",
    },
    {
        link: "plans",
        title: "plans",
    },
    {
        link: "quotes",
        title: "quotes",
    },
    {
        link: "contact",
        title: "contact",
    },
];

function Demo() {
    return (
        <Fragment>
            <section className="section theme-preview-demos">
                {demos.map((value, index) => (
                    <div key={index}>
                        <a rel="noopener noreferrer" href={`/${value.link}`}>
                            <h1>{value.title}</h1>
                            <p>{value.subtitle}</p>
                            <hr />
                        </a>
                    </div>
                ))}
            </section>
            <section className="section">
                <div className="display-spacing">
                    {blocks.map((value, index) => (
                        <div key={index}>
                            <a rel="noopener noreferrer" href={`/${value.link}`}>
                                <h3>{value.title}</h3>
                                <p>{value.subtitle}</p>
                                <hr />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

export default Demo;
