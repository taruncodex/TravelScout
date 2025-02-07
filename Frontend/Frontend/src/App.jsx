import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer';
import HotelPage from './components/HotelPage';
// import Carousel from "./components/Carousel";

function App() {

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100 w-100%">
    //   {/* <Carousel /> */}
    // </div>
    <Router>
  
          <Navbar/>
          <Signup/>
          <Footer/>
          <Routes>
        <Route path="/hotel/:id" element={<HotelPage />} />
      </Routes>
  
    </Router>
  )
}

export default App
