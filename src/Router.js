import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MyHome from "./myHome";
import NotFound from "./pages/notFound";
import Header from "./components/header";

function Router() {
  return (
    <BrowserRouter basename="adtractor">
      <Header />
      <Switch>
        <Route exact path="/" component={MyHome} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
