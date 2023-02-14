import React, { useState } from "react";
import Home from "./Home";
import TableMap from "./TableMap";
import Totals from "./Totals";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/tablemap">
        <TableMap />
      </Route>
      <Route path="/totals">
        <Totals />
      </Route>
    </Switch>
  );
}

export default App;
