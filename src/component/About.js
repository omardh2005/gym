import React from 'react'
import logo from '../photos/1.webp'
import './About.css'
import { motion } from 'framer-motion'
export const About=()=>{
  return (
    <div className='about' id='about'>
      <section>
        <motion.div initial={{opacity:0,x:-300}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>
        <h2 className='text-center'><span className='Ab'>About</span> Us</h2><hr className='hr'/></motion.div>
        <div className='container'>
          <div className='row lg-6 md-6 '>
            <motion.div initial={{opacity:0,x:-300}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className='col-lg-6'>
              <img src={logo} alt='logo' className='img1'/>
            </motion.div>
            <div className='col-lg-6'>
             <p>lkjdfo uethf oqejgn okbvje uhgvk lorem jgvo arehnb ouhawkjv<br/>
             iudhjbn  wi ouiehnvf oueqhfv aeugvk ijwrg eijthlb oahun pijwr <br/>
             winegv kbefv iuh pokytj qoij pooru kbevo iubf kujbv lka ijf<br/>
             kwehfbj loj2iot poj quegf ohuw qjf poejth knoagv sdnodkjvk oijr <br/>
             oufhb pprioj oijerg qwoih eoij oijerf ubfv ksbr ojaef ksuhbiv <br/>
             kjbdb kuebgw lqojf aouef oijoth oijenlf lioqn ev lainfv asiohfl lkj
             </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}


export default About
