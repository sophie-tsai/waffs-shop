import React from "react";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

import "./App.sass";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
