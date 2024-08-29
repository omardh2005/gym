import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      
      <div className='container'>
     
        <div className='row lg-4 md-4'>
          <div className='col-lg-4'>
            <h3>The Gym : </h3>
            <h4>Open : 9:00</h4>
            <h4>Close : 12:00</h4>
            <h4>Can You Contact With Us . </h4>
          </div>
          <div className='col-lg-4'>
            <h3>Contact With Us By Numbers : </h3>
            <h4>+963994051940</h4>
            <h4>+963938746796</h4>
          </div>
          <div className='col-lg-4'>
          <h3>Contact With Us By Links : </h3>
          <h4>By Facebook  <FontAwesomeIcon className='icon1' icon={faFacebookF}/></h4>
          <h4>By Instgram  <FontAwesomeIcon className='icon2' icon={faInstagramSquare}/></h4>
          <h4>By Whatsapp  <FontAwesomeIcon className='icon3' icon={faWhatsappSquare}/></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
