import React from "react";
import * as ActionType from "../Constants/constants";
let initialState = {
  data: [],
  isLoading: false,
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_API_LISTPRODUCT:
      state.data = payload;
      break;
    case ActionType.IS_LOADING_lIST_PRODUCT:
      state.isLoading = payload;
    default:
      break;
  }

  return { ...state };
};

export default Reducer;
