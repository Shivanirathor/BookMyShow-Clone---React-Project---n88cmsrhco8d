import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImg from "./user.png";
import ".//Home/Home.css";

const Login = () => {
  const usename = localStorage.getItem("name") || " ";
  return (
    <div className="login">
      <Link to="Signup">
        <img src={userImg} alt="img" width={"30px"} height={"20px"} />
        {localStorage.getItem("loggedIn") ? (
          <div>Welcome {usename}</div>
        ) : (
          <h3>Login</h3>
        )}
      </Link>
    </div>
  );
};

export default Login;
