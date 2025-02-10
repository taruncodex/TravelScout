import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Homepage";
import LandingPage from "./LandingPage";
import Destination from "./Destination";
import HotelPage from "./HotelPage";
import Signup from "./Signup";
import Trending from "./Trending";
import AdventureTravel from "./AdventureTravel";
import LuxuryPage from "./LuxuryPage";
import CulturalTravel from "./CulturalTravel";
import MountainsPage from "./MountainsPage";
import BeachPage from "./BeachPage";
import DesertPage from "./DesertPage";
import ForestPage from "./ForestPage";
import SpiritualPage from "./SpiritualPage";
import HeritagePage from "./HeritagePage";
import Discover from "./Discover";
import AboutUs from "./AboutUs"
import ProfilePage from "./ProfilePage";
// import Signin from "./Signin"; // Import Signin component

const AppRoutes = () => {
  return (
    <Routes>
      {/* Define main routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/destination/:id" element={<Destination />} />
      <Route path="/gethotel/:id" element={<HotelPage />} />
      {/* <Route path="/sign-up" element={<Signup />} /> */}
      <Route path="/sign-in" element={<Signup />} /> 

      {/* Redirect all unknown paths to Home */}
      <Route path="/trending" element={ <Trending/>} />

      <Route path="/adventure" element={ <AdventureTravel/>} />
      <Route path="/luxury" element={ <LuxuryPage/>} />
      <Route path="/culture" element={ <CulturalTravel/>} />

      <Route path="/mountains" element={ <MountainsPage/>} />
      <Route path="/beach" element={ <BeachPage/>} />
      <Route path="/desert" element={ <DesertPage/>} />
      <Route path="/forest" element={ <ForestPage/>} />
      //
      <Route path="/spiritual" element={ <SpiritualPage/>} />
      <Route path="/heritage" element={ <HeritagePage/>} />
      <Route path="/discover" element={ <Trending/>} />
      <Route path="/about-us" element={ <AboutUs/>} />
      <Route path="/profile" element={ <ProfilePage/>} />



      

    
    </Routes>
  );
};

export default AppRoutes;
