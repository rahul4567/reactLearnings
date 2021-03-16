import { combineReducers } from "redux";
import products from "./products";
import pageInfo from "./pageInfo";

export default combineReducers({
  products : products,
  pageInfo : pageInfo
});
