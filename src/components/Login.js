import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import { auth } from "../firebaseConfig";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //this stops refresh
    //do login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const signUp = (event) => {
    event.preventDefault(); //this stops refresh
    //do signUp logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //signs up, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>By signinn-in you're agreeing to our terms and conditions</p>
        <button onClick={signUp} className="login__signUpButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
