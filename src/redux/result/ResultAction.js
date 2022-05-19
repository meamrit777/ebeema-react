import axios from "axios";
import { ActionTypes } from "../ActionTypes";
import queryString from "query-string";

export const fetchAllResult = () => async (dispatch) => {
  // console.log("val",)

  const data = {
    category: "endowment",
    age: "52",
    child_age: "0",
    proposer_age: "0",
    husband_age: "0",
    wife_age: "0",
    term: "20",
    sum_assured: "2000000.00",
    mop: "yearly",
    invest: "100000.00",
    "company_id[]": [],
    features: [],
  };

  const q = queryString.stringify(data);

  const response = await axios({
    method: "post",
    url: `http://ispl.ebeema.com/api/life/calculation`,
    data: q,
  });
  console.log("responsesssss", response);
  dispatch({ type: ActionTypes.SET_RESULT, payload: response.data });
};

export const fetchSelectedResult = (data) => async (dispatch) => {
  const q = queryString.stringify(data);

  const response = await axios({
    method: "post",
    url: `http://ispl.ebeema.com/api/life/calculation`,
    data: q,
  });

  console.log("responsesssss", response);
  dispatch({ type: ActionTypes.SELECTED_RESULT, payload: response.data });
};
