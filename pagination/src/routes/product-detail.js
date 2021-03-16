import React from "react";
import { Route } from "react-router-dom";

import ProductDetail from "../containers/ProductDetail";

const productDetail = () => (
  <Route path="/product-detail/:productId" component={ProductDetail} />
);

export default productDetail;
