import React from "react";
import "../Style/MainContent.css";
import Genres from "../Components/Genres";
import Content from "../Components/Content";
import Header from "../Components/Header";
import CarouselContainer from "../Components/CarouselContainer";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <CarouselContainer />
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
