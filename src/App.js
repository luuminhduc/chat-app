import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store from './redux/store';
import config from "./firebase/config";
import firebase from 'firebase';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
const App = () => {

  const rrf = {
    config,
    firebase,
    dispatch:store.dispatch
  }

  const AuthIsLoaded = ({children}) => {
    const auth = useSelector(state=>state.firebaseReducer.auth);
    if(!isLoaded(auth)) return "";
    return children
  }

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrf}>
        <AuthIsLoaded>
          <BrowserRouter>
            <Routes>
               <Route path="/home" element={<Home/>}/>
               <Route path="/" element={<Navigate replace to="/home"/>}/>
            </Routes>
          </BrowserRouter>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
 
export default App;