import { configureStore } from "@reduxjs/toolkit";

import movieSlice from "./movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware().concat(pokemonApi.middleware),
});
