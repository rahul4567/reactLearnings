import React from "react";
import { Route } from "react-router-dom";

import ProductList from "../containers/ProductList";

const productList = () => (
  <Route exact path="/" component={ProductList} />
);

export default productList;
