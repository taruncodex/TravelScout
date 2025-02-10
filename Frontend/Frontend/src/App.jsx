import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/routes"; // Import updated routes
import Signup from "./components/Signup"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
       <Navbar/>
      <AppRoutes />
      <Footer/>
      {/* <Signup/> */}
    </Router>
  );
}

export default App;
