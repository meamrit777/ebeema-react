import { combineReducers } from "redux";
import {
  categoryReducer,
  selectedCategoryReducer,
} from "./calculator/CalculatorReducer";
import { resultReducer } from "./result/ResultReducer";

const reducers = combineReducers({
  allProducts: categoryReducer,
  product: selectedCategoryReducer,
  allResults: resultReducer
});

export default reducers;
