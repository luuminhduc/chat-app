

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCablmrGJrpXXk8bOn4D1gkGiTs_YyYHtA",
    authDomain: "chat-app-e70e3.firebaseapp.com",
    projectId: "chat-app-e70e3",
    storageBucket: "chat-app-e70e3.appspot.com",
    messagingSenderId: "734806419318",
    appId: "1:734806419318:web:432ec2b84e33ef5aed7c57"
  };

firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export const storage = firebase.storage()

  export default firebase;