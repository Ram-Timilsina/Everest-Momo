import React from 'react'
import Navbar from './Navbar'
import "./App.css";
import serviceimg from "../src/Image/Group 8 (1).png"
import dineus from "../src/Image/Image (5).png"
import { IoPlayCircleOutline } from 'react-icons/io5'
import party from '../src/Image/party.png';
import vectorqr from "../src/Image/Vector.png"
import image6 from '../src/Image/Image (6).png'
import catering from '../src/Image/Chef.png'
import Footer from './Footer'

function Services() {
  return (
    <div>
        <div>
          <Navbar/>
        </div>
      <div className="service-header" >
        <div className="ser-vice"style={{marginTop:'2rem'}}>
          <h1 className='color3'>Our Services</h1>
        </div>
        <div className='novatext'>
          <p className='color2'>KNOWING OUR CUSTOMERS NEEDS</p>
          <h2><span className='color'>We're more than just momos.</span><br />
              We're a full-service dining experience.</h2>       
        </div>  
      </div>
      <div>
        <img src={serviceimg} alt="pic" className='serviceimg' style={{ marginLeft: '62rem', marginTop:'-10rem' }} />
      </div>
      <div>
        <img src={dineus} alt="pic" className='dineus' style={{ width:'98rem'}} />
      </div>
      <div className='dineheader'>
      <div>
        <h2>Dine With Us</h2>
        <p>Enjoy our momos in the comfort of your own home with our delivery services</p>
      </div><br />
      <div>
        <button className='watchbtn' ><IoPlayCircleOutline/> Watch the video</button>
      </div>
      </div>

      <div style={{display:'flex', justifyContent:'space-around', paddingTop:'5rem'}}>
        <div>
          <div>
          <img src={party} alt="pic" style={{marginTop:'8rem'}} />
          <h2>Private Party</h2>
          <p className='color2'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus <br /> lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus <br /> viverra tincidunt.</p>
          </div>
          <div style={{display:'flex', gap:'1rem'}}>
            
              <div>
          <h2 className='color3' style={{marginTop:'2rem'}}>Scan the QR code</h2>
            <p className='color2'>You can also check about the service</p>
            </div>
            
            <div>
            <img src={vectorqr} alt="pic" />
            </div>
          </div>
        </div>
        
        <div>
        <img src={image6} alt="pic" className='img6'style={{marginTop:'8rem'}}  />
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'space-around', paddingTop:'5rem'}}>
      <div>
        <img src={image6} alt="pic" className='img6' />
        </div>

        <div>
          <div>
          <img src={catering} alt="pic" />
          <h2>Categring</h2>
          <p className='color2'>Lorem ipsum dolor sit amet consectetur. Lectus faucibus <br /> lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus <br /> viverra tincidunt.</p>
          </div>
          <div style={{display:'flex', gap:'1rem'}}>
            <div>
          <h2 className='color3' style={{marginTop:'2rem'}}>Scan the QR code</h2>
            <p className='color2'>You can also check about the service</p>
            </div>
            <div>
            <img src={vectorqr} alt="pic" />
            </div>
          </div>
        </div>
        </div>

      <div className='query'>
        <h2>Got Any Queries?</h2>
        <p className='color2'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
        <button className='watchbtn'>Get in Touch</button>
        
      </div><br />
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Services;