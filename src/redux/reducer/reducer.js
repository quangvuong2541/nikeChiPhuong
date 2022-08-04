import { combineReducers } from "redux";
import reducerCart from "../../component/Cart/module/Reducers/reducer";
import reducerURL from "../../component/ListProduct/Module/Reducers/reducers";
import reducerSignInSignUp from "../../component/NavBar/NavMainComponents/Redux/Modules/reducers/Reducers";
const rootReducer = combineReducers({
  reducerURL,
  reducerCart,
  reducerSignInSignUp,
});
export default rootReducer;
