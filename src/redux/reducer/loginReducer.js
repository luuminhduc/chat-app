import * as actions from '../actions/loginAction/actionTypes';

const initialState = {
    loginError:"",
}

export default function loginReducer(state=initialState,action) {
    const {type,payload} = action;
    switch(type) {
        case actions.HIDE_LOGIN_ERR:return{...state,loginError:""};
        case actions.LOGIN_FAILURE:return{...state,loginError:payload};
        case actions.LOGIN_REQUEST_SUCCESSS: return {...state,loginError:""};
        default: return state;
    }
}