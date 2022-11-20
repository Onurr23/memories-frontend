import { createSlice } from '@reduxjs/toolkit';

export interface Post {
  _id?: string;
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedFile: string;
  likeCount?: any;
  createdAt?: any;
}

interface PostContext {
  posts: Post[];
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
  updatedPost?: Post;
  deletedPost?: Post;
  currentPost?: Post;
}

const initialState: PostContext = {
  posts: [],
  isLoading: false,
  error: false,
  errorMessage: ''
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, data) => {
      state.posts = data.payload;
    },
    createPost: (state, data) => {
      state.posts = [...state.posts, data.payload];
    },
    updatePost: (state, data) => {
      state.updatedPost = data.payload;
    },
    deletePost: (state, data) => {
      state.deletedPost = data.payload;
    },
    setLoading: (state, data) => {
      state.isLoading = data.payload;
    },
    setCurrentPost: (state, data) => {
      state.currentPost = data.payload;
    }
  }
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
