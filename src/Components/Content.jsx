import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { getMovieList } from "../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const Content = () => {
  const dispatch = useDispatch();
  const { movieList, genresId } = useSelector((state) => state.movie);
  // const [movieList, setMovieList] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.themoviedb.org/3/discover/movie", {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjQyYzEwY2I1YzYyYWQ0YTE4YTBmMWQ5MjE1OTc2MyIsInN1YiI6IjY0OTQ4ZTllOWEzNThkMDBhYzUwMzZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0K35dVZMCnQ8VV_FMstVS2ORXFmVD-_XCgwrVoDwTr8",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       // Handle the data response
  //       setMovieList(response.data.results);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  // console.log("movislist", movieList);
  // console.log("firstgenresId", genresId);
  return (
    <div >
      <h2 style={{color:"white", fontSize:40, margin:8}}>Now Playing</h2>
      <div
        style={{
          cursor:"pointer",
          color: "white",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          
        }}
      >
        {movieList
          .filter((movie) => {
            return movie.genre_ids.includes(genresId);
          })
          .map((data) => {
            return (
              <div key={data.id}>
                <Card
                  imgUrl={
                    "https://image.tmdb.org/t/p/original" + data.poster_path
                  }

                  title={data.original_title}
                  language={data.original_language}
                  rating={data.vote_average}
                  overview={data.overview}
                  releasedate={data.release_date}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Content;
