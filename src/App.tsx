import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
