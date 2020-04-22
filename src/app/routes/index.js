import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import MethodPage from "../../pages/MethodPage";
import GroupsPage from "../../pages/GroupsPage";
import DeputiesPage from "../../pages/DeputiesPage";
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
      <Route path="/deputes">
        <DeputiesPage />
      </Route>
      <Route path="/groupes">
        <GroupsPage />
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
