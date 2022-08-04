import React from "react";
import { applyMiddleware } from "redux";
import * as ActionType from "../Constants/constants";
import API from "../../../../axios/API";

export const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

export const actGetProductAPI = (gender, typeProduct) => {
  return async (dispatch) => {
    try {
      //lazyLoading true
      dispatch(
        createAction({
          type: ActionType.IS_LOADING_lIST_PRODUCT,
          payload: true,
        })
      );
      // dau ? la dung de noi endpoint, dau & de noi tu khoa tiep theo
      const res = await API(
        `product/?gender=${gender}&typeProduct=${typeProduct}`,
        "GET"
      );
      //console.log(res);
      //fetch thong tin
      dispatch(
        createAction({
          type: ActionType.FETCH_API_LISTPRODUCT,
          payload: res.data,
        })
      );
      //sau khi lay thong tin, lazyLoading false
      dispatch(
        createAction({
          type: ActionType.IS_LOADING_lIST_PRODUCT,
          payload: false,
        })
      );
    } catch (error) {
      console.log({ ...error });
    }
  };
};
