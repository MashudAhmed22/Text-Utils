import './App.css';

import Navbar from '../src/Components/Navbar'
import Textform from '../src/Components/Textform'
import About from '../src/Components/About';
import React, { useState } from 'react';
// import {BrowserRouter as Router,Route,Link} from "react-router-dom";
// import { Switch } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "rgb(12 49 71)"
      document.title = 'textUtils-Dark Mode'

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      document.title = 'textUtils-Light Mode'
    }

  }

  return (
    <>

      <Router>
        <Navbar title='textUtils' about="About Us" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar  about="About Us"/> */}
        <div className="container mt-2">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform heading='Enter text below' mode={mode} />} />
        </Routes>
        </div>
        </Router>

        

      </>


      );
}

      export default App;
