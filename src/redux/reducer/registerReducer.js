import * as actions from "../actions/registerAction/actionTypes";

const initialState = {
    registeError:"",
}

export default function registerReducer(state=initialState,action){
    const {type,payload} = action;
    switch(type) {
        case actions.REGISTER_FAILURE: {
            console.log(payload);
            return{...state,registerError:payload}
        }
        case actions.REGISTER_SUCCESS:return{...state,registeError:""};
        default: return state;
    }
}