import React from "react";
import "../Style/Home.css";
import favouriteImg from "../assets/favourite.png";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const navigate = useNavigate();
  return (
    <div className="favourite">
      <div onClick={() => navigate("/wishlist")}>
        <img src={favouriteImg} alt="img" width={"45px"} height={"45px"} />
      </div>
    </div>
  );
};

export default Favourite;
