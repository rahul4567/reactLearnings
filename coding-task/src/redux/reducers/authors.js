import { SET_AUTHORS } from "../actionTypes";

const initialState = [];

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      return action.payload;
    default:
      return state;
  }
};

export default authorsReducer;
