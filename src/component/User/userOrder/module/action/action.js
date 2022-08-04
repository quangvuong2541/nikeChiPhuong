import API from "../../../../../axios/API";
import * as ActionTypeLogin from "../../../../../component/NavBar/NavMainComponents/Redux/Modules/constants/Constants";

export const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

export const updateProfileAPI = (data, token) => {
  return async (dispatch) => {
    try {
      const res = await API(`users/update`, "PUT", data, token);
      const dataLogin = {
        email: data.email,
        password: data.password,
      };

      const resLogin = await API("users/login", "POST", dataLogin);
      dispatch(
        createAction({
          type: ActionTypeLogin.FETCH_API_LOGIN,
          payload: resLogin.data,
        })
      );
      localStorage.setItem("user", JSON.stringify(resLogin.data));
      alert("Update profile successfully");
    } catch (error) {
      console.log(error);
      alert("Fail to update profile ");
    }
  };
};

export const cancelAPIOrder = (data, token) => {
  return async (dispatch) => {
    try {
      const res = await API(`cart/delete`, "DELETE", { _id: data }, token);
      alert("CANCEL ORDER ID" + data);
    } catch (error) {
      console.log({ ...error });
      alert("Fail to cancel order");
    }
  };
};
