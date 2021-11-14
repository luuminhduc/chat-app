import * as actions from '../actions/themeAction/actionTypes';

const initialState = {
    isLight:true
}

export default function themeReducer(state=initialState,action) {
    const {type} = action;
    switch(type){
        case actions.SWITCH_THEME: return{...state, isLight:!state.isLight};
        default:return state;
    }
}