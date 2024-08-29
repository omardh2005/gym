import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './Navbr.css'
const Navbr = () => {
  return (

    <div className='navbr'>
      <Navbar  expand="lg">
  <h3> <FontAwesomeIcon className='icon' icon={faDumbbell} /> <span className='gym'>Gym</span></h3>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#sabscribe">Sabscribe</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </div>

  )
}

export default Navbr
