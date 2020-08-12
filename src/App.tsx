import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Shop from "./components/Shop/Shop";
import ProductPage from "./components/ProductPage/ProductPage";
import "./App.scss";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div>
      <Header />

      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/shop/:id">
            <ProductPage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default App;
