import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "./pages/Intro";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Intro} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
