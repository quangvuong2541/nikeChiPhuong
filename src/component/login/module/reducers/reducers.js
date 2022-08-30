import * as Actiontype from "../constants/constants"
const userLocal = JSON.parse(localStorage.getItem("user"))
let initialState = {
    open: false,
    openSU: false,
    user: userLocal,
    dataAll: [],
    dataSearchList: [],
    dataSuggest: [],
    isAdmin: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actiontype.REDUX:
            state.open = action.data
            break;
        case Actiontype.SIGNUP:
            state.openSU = action.data
            break;
        case Actiontype.LOGOUT:
            state.user = action.payload;
            state.isAdmin = false
        case Actiontype.FETCH_API_LOGIN:
            state.user = action.payload;
            state.open = false
        default:
            break;
    }
    return { ...state }
}
export default reducer;