import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoogleMaps from './component/GoogleMaps';
import UserAlbums from './component/UserAlbums';

function App() {
      
  return (
    <div className="App">
          
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<GoogleMaps />} />
         
          <Route path="/googleMaps" element={<GoogleMaps />} />
          <Route path="/useralbums" element={<UserAlbums />} />
         
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
