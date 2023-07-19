import React from "react";
import Search from "../Pages/Search";
import Favourite from "../Pages/Favourite";
import Image from "./Image";
import Login from "../Pages/Login";

const Header = ({hideSearch}) => {
  return (
    <div>
      <div
        style={{
          background: "rgb(51, 53, 69)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Image />
       {!hideSearch && <div>
          <Search />
        </div> }
        {!hideSearch && <div>
          <Favourite />
        </div> }
        {!hideSearch &&  <div style={{ marginRight: "20px" }}>
          <Login />
        </div>}
      </div>
    </div>
  );
};

export default Header;
