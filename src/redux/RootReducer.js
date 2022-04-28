import { combineReducers } from "redux";
import {
  categoryReducer,
  selectedCategoryReducer,
} from "./calculator/CalculatorReducer";

const reducers = combineReducers({
  allProducts: categoryReducer,
  product: selectedCategoryReducer,
});

export default reducers;
