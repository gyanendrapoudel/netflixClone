
import React, { useEffect } from 'react'
import HomeScreen from './screens/HomeScreen'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import Error from './screens/Error'
import ProfileScreen  from './screens/ProfileScreen'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
       //logged in 
      } else{
       //logged out
       dispatch(logout());
      }
    });
    return  unsubscribe;
    
  },[])
  return (
    <div className="app">
      {/* <HomeScreen /> */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="*" element={<Error />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
