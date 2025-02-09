import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Navbar';
import TravelType from './TravelType'
import CityCards from './CityCards'
import CountryCards from './CountryCards'
import Footer from './Footer'
// import Footer from './components/Footer';
// import ProfilePage from './components/ProfilePage';

// import HotelPage from './components/HotelPage';
import Carousel from "./Carousel";
const Homepage= ()=>{
    return(
        
            <>
     <Navbar/>
     <Carousel/>
     <TravelType/>
     <CityCards/>
     <CountryCards/>
     <Footer/>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/destination/65a4cfae9b1e8a001c456780" />} />
        <Route path="/destination/:id" element={<Destination />} />
      </Routes> */}
   </>
    
    )
}
export default Homepage;