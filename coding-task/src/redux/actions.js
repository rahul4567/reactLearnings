import { SET_POSTS, SET_AUTHORS } from "./actionTypes";

export const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts
});

export const setAuthors = authors => ({
  type: SET_AUTHORS,
  payload: authors
});
