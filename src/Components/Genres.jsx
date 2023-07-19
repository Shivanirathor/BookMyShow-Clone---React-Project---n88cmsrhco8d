import React, { useEffect } from "react";
import { getGenresList, setGenresId } from "../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const Genres = () => {
  const dispatch = useDispatch();
  const { genresType } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getGenresList());
  }, []);

  return (
    <div>
      <h2>Genres</h2>
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
