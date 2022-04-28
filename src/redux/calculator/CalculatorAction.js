import { ActionTypes } from "../ActionTypes";
import axios from "axios";

export const fetchAllCategory = () => async (dispatch) => {
  const response = await axios.get(
    "https://ispl.ebeema.com/api/life/catagories"
  );
  dispatch({ type: ActionTypes.FETCH_CATEGORY, payload: response.data });
};
export const setCategory = (products) => {
  console.log("products", products);
  return {
    type: ActionTypes.SET_CATEGORY,
    payload: products,
  };
};

export const selectedCategory = (product) => {
  return {
    type: ActionTypes.SELECTED_CATEGORY,
    payload: product,
  };
};
