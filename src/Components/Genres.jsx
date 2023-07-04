import axios from "axios";

import React, { useEffect, useState } from "react";
import { getGenresList, setGenresId } from "../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const Genres = () => {
  // const [genresType, setGenresType] = useState([]);
  const dispatch = useDispatch();
  const { genresType } = useSelector((state) => state.movie);
  // const [genresId, setGenresId] = useState();
  // useEffect(() => {
  //   axios
  //     .get("https://api.themoviedb.org/3/genre/movie/list?language=en", {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjQyYzEwY2I1YzYyYWQ0YTE4YTBmMWQ5MjE1OTc2MyIsInN1YiI6IjY0OTQ4ZTllOWEzNThkMDBhYzUwMzZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0K35dVZMCnQ8VV_FMstVS2ORXFmVD-_XCgwrVoDwTr8",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       // Handle the data response
  //       setGenresType(response.data.genres);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  useEffect(() => {
    dispatch(getGenresList());
  }, []);

  // const handleGenresId = (genresId) => {
  //   setGenresId(genresId);
  // };

  return (
    <div>
      <h2>Genres </h2>
      {genresType.map((data) => {
        return (
          <p
            className="genresText"
            key={data.id}
            onClick={() => dispatch(setGenresId(data.id))}
          >
            {data.name}{" "}
          </p>
        );
      })}
    </div>
  );
};

export default Genres;
