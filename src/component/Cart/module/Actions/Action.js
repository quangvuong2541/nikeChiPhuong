import API from "../../../../axios/API";
import * as ActionType from "../Contants/Contants"


export const createAction = ({ type, payload }) => {
    return {
        type,
        payload,
    }
}
export const postAPICart = (data, token, history) => {

    return async (dispatch) => {
        try {
            const res = await API("/cart/create", "POST", data, token)
            setTimeout(() => {
                alert("order successfull")
                localStorage.removeItem("cart")
                //  quay lại trang user/order
               history("/user/order")

                dispatch(createAction({ type: ActionType.RESET_CART, payload: [] }))
            }, 2000)
        } catch (error) {
            alert("order fail")
            console.log({ ...error });
        }
    }
}
export const postFavoriteCart = () => {
    return async () => {
        try {
            const userLocal = JSON.parse(localStorage.getItem("user"));
            const { token } = userLocal
            const userFavor = JSON.parse(localStorage.getItem("userFavor"))
            if (userFavor === null) {
                const res1 = await API(
                    "/users/addUpdateFavorite",
                    "POST",
                    { productFavorite: [] }, token
                )
            } else {
                const res2 = await API(
                    "/users/addUpdateFavorite",
                    "POST",
                    { productFavorite: userFavor }, token

                )
            }
        } catch (error) {
            alert("add favorite fail")
            console.log({ ...error });
        }
    }
}