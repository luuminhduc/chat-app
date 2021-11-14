import * as actions from './actionTypes';

export const loginRequest = (user,navigate) => async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const {email,password} = user;
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(() => dispatch(loginSuccess(navigate)))
    .catch(err => dispatch(loginFailure(err)))
}

const loginSuccess = (navigate) => {
    navigate(-1);
}

const loginFailure = (err) => {
    return{
        type: actions.LOGIN_FAILURE,
        payload: err.message,
    }
}

export const hideLoginError = () => {
    return {
        type: actions.HIDE_LOGIN_ERR,

    }
}