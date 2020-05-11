import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-grid-system";

function Header(props) {
    // let logo = <img src="/assets/images/logo/logo.png" alt="Aion" />;

    return (
        <header className={`app-header`}>
            <Container>
                <div className="header-wrap">
                    <div className="header-left">
                        <div className="header-menu">
                            <ul>
                                {menu.map((value, index) => (
                                    <li key={index}>
                                        <Link to={value.url}>{value.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-link">
                            <button className="button button-md button-radius button-line-dark">
                                <a href="https://themeforest.net" title="Aion - React Degital Agency Template">
                                    BUY NOW
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

let menu = [
    {
        url: "home-1",
        title: "Home",
        submenu: false,
    },
    {
        url: "home-2",
        title: "About",
        submenu: false,
    },
    {
        url: "home-3",
        title: "Service",
        submenu: false,
    },
    {
        url: "home-4",
        title: "Portfolio",
        submenu: false,
    },
    {
        url: "",
        title: "Pages",
        submenu: false,
    },
    {
        url: "contact",
        title: "Contact",
        submenu: false,
    },
];

export default Header;
