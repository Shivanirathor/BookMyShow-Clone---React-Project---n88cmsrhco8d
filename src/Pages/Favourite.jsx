import React from "react";
import ".//Home/Home.css";
import favouriteImg from "./favourite.png"

const Favourite = () => {
  return (
    <div className="favourite">
      {/* <Link to="payment"> */}
      <img
        src={favouriteImg}
        alt="img"
        width={"45px"}
        height={"45px"}
      />
      {/* </Link> */}
   
    </div>
  );
};

export default Favourite;
