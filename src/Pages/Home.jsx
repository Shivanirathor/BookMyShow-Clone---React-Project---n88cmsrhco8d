import React from "react";
import "../Style/MainContent.css";
import Image from "../Components/Image";
import Genres from "../Components/Genres";
import Content from "../Components/Content";
import Favourite from "./Favourite";
import Login from "./Login";
import Search from "./Search";
import { useSelector } from "react-redux";
import Header from "../Components/Header";

const Home = () => {
  const movieList = useSelector((state) => state.movie.movieList);
  // console.log("movie", movieList);
  return (
    <div>
       <Header/>
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
