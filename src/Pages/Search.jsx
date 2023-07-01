import React, { useState } from "react";
import ".//Home/Home.css";
import {  getMovieSearch } from "../Redux/movieSlice";
import { useDispatch } from "react-redux";
const Search = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleChange=(event)=>{
setSearchInput(event.target.value);
  }

  const dispatchMovieList=()=>{
    dispatch(getMovieSearch(searchInput));
  }
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
        value={searchInput}
        onChange={handleChange}
      />
      <button onClick={dispatchMovieList}>Search</button>
    </div>
  );
};

export default Search;
