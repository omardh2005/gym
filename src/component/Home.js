import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <div className='home' id='home'>

      <div className='container'>
        <motion.div 
        initial={{opacity:0,x:-300}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        className='row lg-6 md-6'>
          <div className='col-lg-6'>
            <p className='transl'>Build Your Body</p>
            <h1 className='trans'>BE <span className='text-purple'>FIT </span>& </h1>
            <h1 className='text-purple'>HEALTHY</h1>
            <p>we give you best exercise for your body
            you must to subscribe with us<br/>
            you must to subscribe with us
            </p>
            <button className='btn btn-dark'>GET STARTED</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
