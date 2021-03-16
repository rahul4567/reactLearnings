import { combineReducers } from "redux";
import posts from "./posts";
import authors from "./authors";

export default combineReducers({
  posts : posts,
  authors : authors
});
