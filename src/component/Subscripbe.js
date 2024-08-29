import React from 'react'
import './Subscribe.css'
import { motion } from 'framer-motion'
const Subscripbe = () => {
  return (
    <div className='subscribe' id='sabscribe'>
      <section>
        <motion.div initial={{opacity:0,x:-300}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>
      <h2 className='text-center hh2'><span className='Ab'>The</span> Subscribe</h2><hr className='hr'/></motion.div>
        <div className='alert'>
          <div className='container'>
          <motion.div initial={{opacity:0,x:-300}} whileInView={{opacity:1,x:0}} transition={{duration:1.2}} className='alert alert-dark a'>
            <h3>Subscribe-Dayes :</h3>
          <p>iuev oijfbr oijmb ounbv o3j4itjnv ljdizb kzndilbj kdnfb
          iuven oimthn zkkmn lsjb ialnb lsnb kjs bnnj
          enrb isnb ooigwam poanig ianb iioimlkk
          </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:-300}} whileInView={{opacity:1,x:0}} transition={{duration:1.4}} className='alert alert-dark a2'>
            <h3>Subscribe-Month :</h3>
          <p>iuev oijfbr oijmb ounbv o3j4itjnv ljdizb kzndilbj kdnfb
          iuven oimthn zkkmn lsjb ialnb lsnb kjs bnnj
          enrb isnb ooigwam poanig ianb iioimlkk
          </p>
          </motion.div>
          <motion.div initial={{opacity:0,x:-300}} whileInView={{opacity:1,x:0}} transition={{duration:1.6}} className='alert alert-dark a'>
            <h3>Subscribe-Year :</h3>
          <p>iuev oijfbr oijmb ounbv o3j4itjnv ljdizb kzndilbj kdnfb
          iuven oimthn zkkmn lsjb ialnb lsnb kjs bnnj
          enrb isnb ooigwam poanig ianb iioimlkk
          </p>
          </motion.div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Subscripbe
