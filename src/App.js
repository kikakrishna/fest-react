import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Uploadpage from './Components/Uploadpage';
import { useState } from 'react';
import Papa from 'papaparse';

function App() {

  

  return (
    <div className="App">


     


          

      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Uploadpage />} />
          {/* <Route exact path="/Search" element={<Searchpage />} /> */}


        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
