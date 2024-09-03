import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../API";

const initialState = {
  movieData: [],
  genres: [],
};
export const getMovies = createAsyncThunk("movie/getupcoming", async () => {
  try {
    const { data } = await axiosInstance.get(
      "movie/upcoming?language=en-US&page=1"
    );
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getgeneres = createAsyncThunk("genre/getupcoming", async () => {
  try {
    const { data } = await axiosInstance.get("genre/movie/list?language=en");
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
});

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movieData = action.payload;
    });
    builder.addCase(getgeneres.fulfilled, (state, action) => {
      action.payload?.genres?.map((genre) => {
        state.genres[genre.id] = genre.name;
      });
    });
  },
});

export default movieSlice.reducer;
export const moviesActions = movieSlice.actions;
