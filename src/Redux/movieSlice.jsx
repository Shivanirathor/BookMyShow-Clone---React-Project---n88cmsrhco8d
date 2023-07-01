import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovieList = createAsyncThunk(
  "movie/getMovieList",
  async (thunkAPI) => {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjQyYzEwY2I1YzYyYWQ0YTE4YTBmMWQ5MjE1OTc2MyIsInN1YiI6IjY0OTQ4ZTllOWEzNThkMDBhYzUwMzZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0K35dVZMCnQ8VV_FMstVS2ORXFmVD-_XCgwrVoDwTr8",
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());
    return res;
  }
);
export const getMovieSearch = createAsyncThunk(
  "movie/getMovieSearch",
  async (payload) => {
    console.log("firstpayload", payload);
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${payload}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjQyYzEwY2I1YzYyYWQ0YTE4YTBmMWQ5MjE1OTc2MyIsInN1YiI6IjY0OTQ4ZTllOWEzNThkMDBhYzUwMzZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0K35dVZMCnQ8VV_FMstVS2ORXFmVD-_XCgwrVoDwTr8",
          "Content-Type": "application/json",
        },
      }
    ).then((data) => data.json());
    return res;
  }
);

export const getGenresList = createAsyncThunk(
  "movie/getGenresList",
  async (thunkAPI) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjQyYzEwY2I1YzYyYWQ0YTE4YTBmMWQ5MjE1OTc2MyIsInN1YiI6IjY0OTQ4ZTllOWEzNThkMDBhYzUwMzZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0K35dVZMCnQ8VV_FMstVS2ORXFmVD-_XCgwrVoDwTr8",
          "Content-Type": "application/json",
        },
      }
    ).then((data) => data.json());
    return res;
  }
);

const initialState = {
  movieList: [],
  genresType: [],
  genresId: 28,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieList: (state) => {
      //   state.value += 1
    },
    setGenresId: (state, { payload }) => {
      state.genresId = payload;
    },
  },
  extraReducers: {
    [getMovieList.fulfilled]: (state, { payload }) => {
      state.movieList = payload.results;
    },
    [getMovieSearch.fulfilled]: (state, { payload }) => {
      state.movieList = payload.results;
    },
    [getGenresList.fulfilled]: (state, { payload }) => {
      state.genresType = payload.genres;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovieList, setGenresId } = movieSlice.actions;

export default movieSlice.reducer;
