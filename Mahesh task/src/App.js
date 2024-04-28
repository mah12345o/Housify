import React from 'react';
import Header from './component/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SavedData from './pages/SavedData';
import ListingData from './pages/ListingData';



const App = () => {
  return (
    <Router>
        <Header /> 
        <Routes>
            <Route path="/saved" element={<SavedData />} />
            <Route path="/home" element={<ListingData />} />
            <Route path="/" element={<ListingData />} />
        </Routes>
    </Router>
  );
};

export default App;
