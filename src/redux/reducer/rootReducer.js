import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import loginReducer from "./loginReducer";
export default combineReducers({
    firebaseReducer,
    loginReducer,
})