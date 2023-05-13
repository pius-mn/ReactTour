import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Items from "./pages/PageList";
import SingleItem from "./pages/SinglePage";
import Home from "./pages/home";


const Routesjs = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/items" exact component={Items} />
        <Route path="/item/:productId">
          <SingleItem />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routesjs;
