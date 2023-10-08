import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

import "../Style/Home.css";
import { Menu, MenuItem } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("name") || " ";
  const isLoggedIn = localStorage.getItem("loggedIn");
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleLogin = (event) => {
    if (!isLoggedIn) {
      navigate("/signup");
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("loggedIn");
      window.location.reload();
    }
  };

  return (
    <div className="login">
      <div
        title="Login"
        onClick={handleLogin}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <PersonIcon fontSize="large" sx={{ cursor: "pointer" }} />
      </div>
      {isLoggedIn && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Welcome:{username}</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      )}
    </div>
  );
};
export default Login;
