import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    get: (state) => {},
  },
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
