import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import MethodPage from "../../pages/MethodPage";
import GroupPage from "../../pages/GroupPage";
import DeputyPage from "../../pages/DeputyPage";
import Admin from "../../features/admin/Admin";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/methode">
        <MethodPage />
      </Route>
      <Route path="/depute/:slug">
        <DeputyPage />
      </Route>
      <Route path="/groupe/:slug">
        <GroupPage />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
