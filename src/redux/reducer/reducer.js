import { combineReducers } from "redux";
import reducerSignSignUp from "../../component/login/module/reducers/reducers";
import reducerURL from "../../component/ListProduct/module/Reducers/reducer"
import reducerAdmin from "../../component/admin/Redux/Reducer/reducer"


const rootReducer = combineReducers({
    reducerSignSignUp,
    reducerURL,
    reducerAdmin
})
export default rootReducer