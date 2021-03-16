import { SET_PAGE_INFO } from "../actionTypes";

const initialState = {
  offset : 0,
  limit : 10,
  currentPage : 0,
  totalPages: 0
};

const pageInfoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_PAGE_INFO:
    console.log(action.payload);
      return Object.assign({}, state, action.payload);
      //return {...state, action.payload};
    default:
      return state;
  }
};

export default pageInfoReducer;
