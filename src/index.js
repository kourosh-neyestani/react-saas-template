import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Scenes
import Demo from "./scenes/demo/Demo";
import Home1 from "./scenes/home/home1";

// Stylesheet
import "./index.scss";

// Shortcodes
import HeadlinePage from "./blocks/HeadlinePage";
import FeaturesPage from "./blocks/FeaturesPage";

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} />
                <Route exact path={`${process.env.PUBLIC_URL}/home-1`} component={Home1} />

                {/* Shortcodes */}
                <Route exact path={`${process.env.PUBLIC_URL}/titles`} component={HeadlinePage} />
                <Route exact path={`${process.env.PUBLIC_URL}/features`} component={FeaturesPage} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
