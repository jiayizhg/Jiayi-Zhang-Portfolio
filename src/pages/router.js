import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import about from "./about";
import projects from "./projects";

export default() => {
    return(
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/about" component={about} />
            <Route path="/projects" component={projects} />
        </Router>
    );
}