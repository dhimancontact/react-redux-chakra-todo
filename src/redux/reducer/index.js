import { combineReducers } from "redux";

import todos from "./todos";
import productReducer from "./productReducer";
export default combineReducers({
  todos,
  allproducts: productReducer,
});

// created allproducts as alias, can be use as simple too
