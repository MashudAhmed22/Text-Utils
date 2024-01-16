import './App.css';

import Navbar from '../src/Components/Navbar'
import Textform from '../src/Components/Textform'
import About from './Components/About';
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor="rgb(12 49 71)"
        document.title='textUtils-Dark Mode'

      }
      else{
        setMode('light');
        document.body.style.backgroundColor="white"
        document.title='textUtils-Light Mode'
    }
  
}

  return (
    <>

      <Navbar title='textUtils' about="About Us" mode={mode}  toggleMode={toggleMode}/>
      {/* <Navbar  about="About Us"/> */}
      <div className="container mt-2">
        <Textform  heading='Enter text below' mode={mode}/>
      <About mode={mode}></About>
      </div>
    </>


  );
}

export default App;
