import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  console.log("hi");
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
