import React, { useState } from 'react';
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

function App() {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
   <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apartmentedit/:id" elements={<ApartmentEdit />} /> 
        <Route path="/apartmentindex" elements={<ApartmentIndex />} /> 
        <Route path="/apartmentnew" elements={<ApartmentNew />} /> 
        <Route path="/apartmentshow/:id" elements={<ApartmentShow />} /> 
        <Route path="/apartmentprotectedindex" elements={<ApartmentProtectedIndex />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
   </>
  );
}

export default App;
