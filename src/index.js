import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Scenes
import Demo from "./scenes/demo/Demo";
import Home from "./scenes/home/Home";
import Home2 from "./scenes/home/Home2";
import Home3 from "./scenes/home/Home3";

// Stylesheet
import "./index.scss";

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} />
                <Route exact path={`${process.env.PUBLIC_URL}/home-1`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL}/home-2`} component={Home2} />
                <Route exact path={`${process.env.PUBLIC_URL}/home-3`} component={Home3} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
