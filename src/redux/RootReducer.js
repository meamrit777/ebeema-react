import { combineReducers } from "redux";
import {
  categoryReducer,
  selectedCategoryReducer,
} from "./calculator/CalculatorReducer";
import { resultReducer, selectedResultReducer } from "./result/ResultReducer";

const reducers = combineReducers({
  allProducts: categoryReducer,
  product: selectedCategoryReducer,
  allResults: resultReducer,
  result: selectedResultReducer,
});

export default reducers;
