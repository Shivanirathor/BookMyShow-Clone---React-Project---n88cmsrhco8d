import React from "react";
import { Link, useNavigate } from "react-router-dom";
import userImg from "../assets/user.png";
import "../Style/Home.css";

const Login = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("name") || " ";
  const isLoggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("loggedIn");
      window.location.reload();
    }
  };

  return (
    <div className="login">
      <div className="user-dropdown">
        <img
          src={userImg}
          alt="img"
          width={"30px"}
          height={"20px"}
          onClick={() => {
            const dropdown = document.querySelector(".user-dropdown-menu");
            dropdown.classList.toggle("show");
          }}
        />
        <div className="user-dropdown-menu">
          {isLoggedIn ? (
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div onClick={() => navigate("/Signup")} style={{ color: "Black" }}>
              Login
            </div>
          )}
        </div>
      </div>
      {isLoggedIn && (
        <div style={{ color: "white" }}>
          Welcome
          <br />
          {username}
        </div>
      )}
    </div>
  );
};
export default Login;
