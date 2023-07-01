import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import lockImg from "./lock.png";
import Home from "../Home";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterUser = () => {
    navigate("/login");
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
  };

  const changedName = (event) => {
    setName(event.target.value);
  };
  const changedEmail = (event) => {
    setEmail(event.target.value);
  };
  const changedPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signup">
      <div className="signupInputs">
        <img src={lockImg} alt="lock" />
        <h2>Sign Up</h2>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={changedName}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={changedEmail}
        />
        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={changedPassword}
        />

        <button onClick={handleRegisterUser}>Register</button>
        <div onClick={() => navigate("/login")}>
          <p style={{ color: "blue" }}>Already have an account? Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
