import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: false,
  errorMessage: "",
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, data) => {
      state.posts = data.payload;
    },
    createPost: (state, data) => {
      state.posts = [...state.posts, data.payload];
    },
    setLoading: (state, data) => {
      state.isLoading = data.payload;
    },
  },
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
