import React from "react";
import "./MainContent.css";
import Image from "../Pages/Image";
import Genres from "./Genres";
import Content from "./Content";
import Favourite from "../Pages/Favourite";
import Login from "../Pages/Login";
import Search from "../Pages/Search";
import { useSelector } from "react-redux";

const Home = () => {
  const movieList = useSelector((state) => state.movie.movieList);
  // console.log("movie", movieList);
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
        <div>
          <Search />
        </div>
        <div>
          <Favourite />
        </div>
        <div style={{ marginRight: "20px" }}>
          <Login />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="genresClr"
          style={{ width: "15%", textAlign: "center" }}
        >
          <Genres />
        </div>
        <div
          className="contentClr"
          style={{ width: "80%", textAlign: "center" }}
        >
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Home;
