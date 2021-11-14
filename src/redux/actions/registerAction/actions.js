import * as actions from "./actionTypes";

export const registerRequest = (user,navigate) => {
    return  function(dispatch,getState,{getFirebase,getFirestore}) {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const {email,password,username} = user;
        firebase.auth().createUserWithEmailAndPassword(email,password).then((res) => {
            firestore.collection('users').doc(res.user.uid).set({
                avatar:"",
                email,
                username,

            }).then(() => dispatch(registerSuccess(navigate)))
            
        })
        .catch(err => dispatch(registerFailure(err)));
    }
}

const registerFailure = (err) => {
    return{
        type: actions.REGISTER_FAILURE,
        payload: err.message,
    }
}

const registerSuccess = (navigate) => {
    console.log("Success");
    navigate(-1);
    return{
        type: actions.REGISTER_SUCCESS
    }
}