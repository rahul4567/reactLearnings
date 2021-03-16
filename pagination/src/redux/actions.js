import { SET_PRODUCTS, UPDATE_CART_ITEM, ADD_TO_CART, SET_PAGE_INFO } from "./actionTypes";

export const setProducts = products => ({
  type: SET_PRODUCTS,
  payload: products
});

export const setPaginationInfo = pageInfo => ({
  type: SET_PAGE_INFO,
  payload: pageInfo
});

export const updateCartItem = (id, count) => (
  {
    type: UPDATE_CART_ITEM,
    id,
    count,
  }
);

export const addToCart = (id, count) => (
  {
    type: ADD_TO_CART,
    id,
    count,
  }
);
