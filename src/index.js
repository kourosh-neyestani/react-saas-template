import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker"

// Scenes
import Demo from './scenes/Demo'

// Stylesheet
import './index.scss'

const Root = () => {
    return (
        <BrowserRouter basename={'/'}>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();