import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";


const SignIn = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const handleUser = () => {
    const nameLocalStorage = localStorage.getItem("name");
    const passwordLocalStorage = localStorage.getItem("password");

    if (nameLocalStorage === name && passwordLocalStorage === password) {
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
    // console.log(nameLocalStorage, passwordLocalStorage, "shivi❤");
    // console.log(name, password, "formdetail");
  };

  const changedName = (event) => {
    setName(event.target.value);
  };

  const changedPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signup">
      <div className="signupInputs">
        <h2>Sign In</h2>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={changedName}
        />

        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={changedPassword}
        />

        <button onClick={handleUser}>Login</button>
      </div>
    </div>
  );
};
export default SignIn;
