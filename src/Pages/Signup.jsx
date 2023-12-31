import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Signup.css";
import lockImg from "../assets/lock.png";
import GoogleIcon from "@mui/icons-material/Google";

import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../Firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleRegisterUser = () => {
    // Check if the fields are empty
    if (!name || !email || !password) {
      alert("Please fill in all the mandatory fields.");
      return;
    }
    // Check if email contains "@gmail"
    if (!email.includes("@gmail")) {
      setEmailError("Please enter a valid email (e.g., yourname@gmail.com)");
      return;
    }

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

  const onLoginClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log("result", result);
        const userName = result.user.displayName;
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("name", userName);
        navigate("/home");
      })
      .catch((error) => {
        console.log("error", error);
      });
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
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={changedEmail}
          required
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={changedPassword}
          required
        />

        <button onClick={handleRegisterUser}>Register</button>

        <button
          type="submit"
          className="googleBttn"
          onClick={onLoginClick}
        >
          <GoogleIcon fontSize="large" />
          Continue with Google
        </button>
        <div onClick={() => navigate("/login")}>
          <p style={{ color: "blue", cursor: "pointer" }}>
            Already have an account? Sign in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
