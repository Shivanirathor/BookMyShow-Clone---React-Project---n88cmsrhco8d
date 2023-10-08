import React, { useEffect } from "react";
import Card from "./Card";
import { getMovieList } from "../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";


const Content = () => {
  const dispatch = useDispatch();
  const { movieList, genresId } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <div >
     
      <h2 style={{ color: "white", fontSize: 40}}>Now Playing</h2>
      <div
        style={{
          width:"100%",
          textAlign:"center",
          cursor: "pointer",
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
