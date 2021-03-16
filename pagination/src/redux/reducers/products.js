import { SET_PRODUCTS } from "../actionTypes";

const initialState = [];

const productReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_PRODUCTS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default productReducer;
