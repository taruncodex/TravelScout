import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
// import Navbar from './components/Navbar';
// import Signup from './components/Signup';
// import Footer from './components/Footer';
// import ProfilePage from './components/ProfilePage';
import Destination from './components/Destination';
// import HotelPage from './components/HotelPage';
// import Carousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route: Redirects from "/" to a sample destination */}
        <Route path="/" element={<Navigate to="/destination/65a4cfae9b1e8a001c456780" />} />

        {/* Dynamic Route for Destination */}
        <Route path="/destination/:id" element={<Destination />} />
      </Routes>
    </Router>
  );
}

export default App;
