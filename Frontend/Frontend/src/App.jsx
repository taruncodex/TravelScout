import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Homepage from "./components/Homepage";

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
  );
}

export default App;
