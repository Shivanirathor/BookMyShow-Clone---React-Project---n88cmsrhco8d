import React from "react";
import Search from "../Pages/Search";
import Favourite from "../Pages/Favourite";
import Image from "./Image";
import Login from "../Pages/Login";


const Header = () => {
  return (
    <div>
      <div
        style={{
          background: "rgb(51, 53, 69)",
          display: "flex",
          justifyContent: "space-between",
          height:"100px",
        }}
      >
        <Image />
        <div>
          <Search />
        </div>
        <div>
          <Favourite />
        </div>
        <div className="mobile_menu">
          <Login />
        </div>
      </div>
    
    </div>
  );
};

export default Header;
