import React from "react";
import Index from "pages/index";
import Blog from "pages/blog";
import Projects from "pages/projects";
import LetsWork from "pages/letsWork";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/blog' component={Blog}/>
			<Route exact path='/projects' component={Projects}/>
			<Route exact path='/lets-work' component={LetsWork}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
