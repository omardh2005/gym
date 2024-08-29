import React from 'react'
import './App.css';
import Navbr from './component/Navbr';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Subscripbe from './component/Subscripbe';
import Contact from './component/Contact';
const App = () => {
  return (
    <div>
      <Navbr/>
      <Home/>
      <About/>
      <Services/>
      <Subscripbe/>
      <Contact/>
    </div>
  )
}

export default App
