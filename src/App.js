import logo from './logo.svg';
import './App.css';

import TravelBlog from './Components/TravelBlog';
import Map from './Components/Map';

import { Routes, Route, Navigate } from "react-router-dom";

import Header from './Header';


function App() {
  return (
    <div className="App">

   

      <Header />

       <Map />
       <Routes>
      <Route path="/travel-blog/:id" element={<TravelBlog />} />
      
      </Routes>  
     
     <TravelBlog />

    </div>
  );
}

export default App;
