import React from 'react'
import { Button, Card } from 'react-bootstrap'
import'./Services.css'
import logo1 from '../photos/1.webp'
import logo2 from '../photos/2.webp'
import logo3 from '../photos/pexels-bemistermister-3490348.jpg'
import { motion } from 'framer-motion'
const Services = () => {
  return (
    <div className='services' id='services'>
      <section className='services'>
        <motion.div initial={{opacity:0,x:-300}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>
      <h2 className='text-center hh2'><span className='Ab'>Our</span> Services</h2><hr className='hr'/></motion.div>
        <div className='container text-center'>
          <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1}} className='row lg-4 md-4'>
            <div className='col-lg-4 col-md-4'>
            <Card >
  <Card.Img variant="top" src={logo1}  width={171}
    height={180} />
  <Card.Body>
    <Card.Title>Subscribe-Dayes</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Go somewhere</Button>
  </Card.Body>
</Card>

            </div>
            <div className='col-lg-4 col-md-4'>
            <Card >
  <Card.Img variant="top" src={logo2}  width={171}
    height={180}/>
  <Card.Body>
    <Card.Title>Subscribe-Month</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
            <div className='col-lg-4 col-md-4'>
            <Card >
  <Card.Img variant="top" src={logo3}  width={171}
    height={180}/>
  <Card.Body>
    <Card.Title>Subscribe-Year</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="dark">Go somewhere</Button>
  </Card.Body>
</Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
