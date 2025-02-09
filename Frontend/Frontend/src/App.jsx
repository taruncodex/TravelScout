import { useState } from 'react'
import './App.css'
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdventureTravel from "./components/AdventureTravel"
import Footer from "./components/Footer"
import TravelCards1 from './components/TravelCards1';
import TravelType from "./components/TravelType"
import CityCards from "./components/CityCards"
import CountryCards from "./components/CountryCards"
import AboutUs from "./components/AboutUs"
import AuthForm from "./components/Signup"

function App() {

  return (
    // // <div className="flex items-center justify-center min-h-screen bg-gray-100 w-100%">
    // //   <Navbar />
    // //   <Carousel />
    // // </div>
    <><Router>
      {/* <Navbar />
      <Carousel />
      <TravelType />
      <CityCards />
      <CountryCards />
      <Footer /> */}
      <AuthForm/>
    </Router>
    </>
  )
}

export default App
