import React from "react";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CarouselItem = ({ item }) => {
  const navigate = useNavigate();
  const imgClick = () => {
    if (localStorage.setItem("loggedIn", true)) {
      navigate("/ticketbooking");
    } else {
      navigate("/Signup");
    }
  };
  return (
    <Paper style={{ cursor: "pointer" }}>
      <img
        src={item.image}
        alt="image"
        onClick={imgClick}
        style={{ width: "100%", height: "60vh" }}
      />
    </Paper>
  );
};

export default CarouselItem;
