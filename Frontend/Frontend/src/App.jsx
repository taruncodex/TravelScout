import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
     <Homepage/>
    </Router>
  );
}

export default App;
