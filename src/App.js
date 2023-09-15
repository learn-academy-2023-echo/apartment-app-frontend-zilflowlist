import React, { useState, useEffect } from 'react';
import './App.css';
import mockApartments from "./mockApartments"
import mockUsers from "./mockUsers"
import Header from './components/Header'
import Footer from './components/Footer'
import ApartmentEdit from './pages/ApartmentEdit';
import ApartmentIndex from './pages/ApartmentIndex';
import ApartmentNew from './pages/ApartmentNew';
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex';
import ApartmentShow from './pages/ApartmentShow';
import NotFound from './pages/NotFound'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null) 
  const [apartments, setApartments] = useState([])
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  }, [])

  const url = "http://localhost:3000"


  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        console.log(response)
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("signup errors: ", error))
  }

  const logout = (id) => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), 
      },
      method: "DELETE",
    })
      .then((payload) => {
        setCurrentUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user") 
      })
      .catch((error) => console.log("logout errors: ", error))
  }

  return (
   <>
    <Header current_user={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn login={login}/>} />
        <Route path="/signup" element={<SignUp signup={signup}/>} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} /> 
        {currentUser && (
          <Route
            path="/myapartments"
            element={<ApartmentProtectedIndex
              apartments={apartments} 
              current_user={currentUser}/>} />
         )}
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} current_user={currentUser} />} /> 
        <Route path="/apartmentnew" element={<ApartmentNew />} /> 
        <Route path="/apartmentedit/:id" element={<ApartmentEdit />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
   </>
  );
}

export default App;
