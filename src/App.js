import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store from './redux/store';
import config from "./firebase/config";
import firebase from 'firebase';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Wrap from './components/Wrapper';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
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
               <Route path="home" element={<Wrap><Home/></Wrap>}/>
               <Route path="profile" element={<Wrap><Profile/></Wrap>}/>
               <Route path="users" element={<Wrap><Chat/></Wrap>}/>
               <Route path="/" element={<Navigate replace to="/home"/>}/>
               <Route path="login" element={<Login/>}/>
               <Route path="register" element={<Register/>}/>
            </Routes>
          </BrowserRouter>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
 
export default App;