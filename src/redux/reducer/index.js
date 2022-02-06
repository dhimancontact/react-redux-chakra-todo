import { combineReducers } from "redux";

import todos from "./todos";
import { productReducer, selectedProductReducer } from "./productReducer";
export default combineReducers({
  todos,
  allProducts: productReducer,
  product: selectedProductReducer,
});

// created allproducts as alias, can be use as simple too
