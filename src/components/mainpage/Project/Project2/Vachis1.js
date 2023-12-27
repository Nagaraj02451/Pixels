import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'

import Vachismini from './Vachismini'
import Aboutus from '../../Aboutus'


const Vachis1 = () => {
  const refname = useRef()

  const right =()=>{
    refname.current.classList.add("spagejbhn")
    // alert("ghbjn")
  }
  
  
  const left =()=>{
    refname.current.classList.remove("spagejbhn")
    // alert("ghbjn")
  }
  return (
    <>
    <div className='int'>
            <div className='int1'>

                         
        <div className='nav'>
            <div className='nav1'>
                  <a href='/'><img src={logoimg}/>   </a>
            </div>
            <div className='nav2'>
                      <div className='navnav'>
                      <div className='nav21'>
                  
                  <img src={dotimg}/>  <a href='/work'> Work      </a> </div>
             
                 
                <div className='nav22'>
                  <img src={dotimg}/> <span onClick={right}>Agency</span></div>
            </div>

                      </div>
       </div>    

             <div className='int21'>
              <div className='int222'>
             
              <div className='int1111'>
              <div> <a href='/vachis'> About the Client</a></div>
            <div  className='org1'><a href='/vachis1'>  Projects Overview</a></div>
            <div><a href='/vachis2'>  Services Offered</a></div>
            {/* <div>Creative Process</div> */}
            <div><a href='/vachis3'>Team</a></div>

                </div>

                <div className='int223'>
                  <div className='int2231'>Welcome to the showcase of our work for the exquisite Belvedere Groups, a haven of luxury staycations nestled in the heart of Lovedale, Ooty. Our collaboration with Vachi's Belvedere, a sublime subdivision, was a testament to refined elegance.<br></br>
                  <br></br>

We embarked on a journey to craft a distinct brand identity, capturing the essence of opulence and tranquility. From striking banners that beckon with allure, to menus that tantalize the senses, every element exudes a modern sophistication.
<br></br>
<br></br>

The website we designed is a virtual gateway to this idyllic retreat, seamlessly blending functionality with aesthetics, offering guests a taste of the grandeur that awaits. Complementing this digital presence is a business card that embodies the same sense of luxury and attention to detail.<br></br>
<br></br>
<br></br>

Explore our portfolio to witness how we transformed Belvedere Groups into a visual masterpiece, embodying the epitome of modern luxury in Lovedale, Ooty.</div>
                </div>
                 <br></br>
            
       
                  
                 </div>

               </div>
   
       </div>
       </div>
       <Vachismini/>
       <Aboutus trigger = {left}  right = {refname}/>

    </>
  )
}

export default Vachis1