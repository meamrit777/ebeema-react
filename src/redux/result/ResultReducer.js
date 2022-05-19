
import { ActionTypes } from "../ActionTypes";

const initialState = {
  results: [],
};
export const resultReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_RESULT:
      return { ...state, results: payload };
    default:
      return state;
  }
};
export const selectedResultReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_RESULT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
