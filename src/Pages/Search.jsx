import React, { useState } from "react";
import "../Style/Home.css";
import { getMovieSearch } from "../Redux/movieSlice";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const dispatchMovieList = () => {
    dispatch(getMovieSearch(searchInput));
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
        value={searchInput}
        onChange={handleChange}
      />
      <SearchIcon
        title="Search"
        onClick={dispatchMovieList}
        className="searchIcon"
      />
    </div>
  );
};

export default Search;
