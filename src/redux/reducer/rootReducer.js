import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
export default combineReducers({
    firebaseReducer,
    loginReducer,
    registerReducer
})