import { ActionTypes } from "../ActionTypes";

const initialState = {
  products: [],
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  // console.log("type",type)

  switch (type) {
    case ActionTypes.FETCH_CATEGORY:
      console.log("payload",payload)
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const selectedCategoryReducer = (state = {}, {type,payload}) => {
  switch (type) {
    case ActionTypes.SELECTED_CATEGORY:
      return { ...state, ...payload };

    default:
      return state;
  }
};
