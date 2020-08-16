import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebaseConfig";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect
  //piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    //clean up operation goes in here
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
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
