import { createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

export default createStore(
  rootReducer,
  // for the redux devtools extension:
  // https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
