import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'

import Aboutus from '../../Aboutus'
import Promini from '../Project6/Promini'


const Pro1 = () => {
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
              <div > <a href='/pro'> About the Client</a></div>
            <div className='org1'><a href='/pro1'>  Projects Overview</a></div>
            <div><a href='/pro2'>  Services Offered</a></div>
            {/* <div>Creative Process</div> */}
            <div><a href='/pro3'>Team</a></div>

                </div>

                <div className='int223'>
                  <div className='int2231'>The unisight wordmark features a clean, futuristic sans-serif font that conveys a sense of modernity and innovation. The font is sleek and streamlined, with subtle curves and angles that give it a distinct visual identity. The letters are spaced out slightly to enhance readability and give the logo a spacious feel.<br></br><br></br>
To create a sense of harmony and balance, all the letters in unisight are in lowercase, giving the logo a more casual and approachable feel. The font is still bold and modern, but the lowercase letters create a softer, more inviting vibe.<br></br><br></br>
The color palette for the wordmark is minimalistic and can be monochromatic or two-toned, depending on the desired style. The overall effect is a futuristic, sleek, and approachable wordmark that effectively communicates the innovative and forward-thinking nature of the unisight brand.</div>
                </div>
                 <br></br>
                
                  
                 </div>

               </div>
   
       </div>
       </div>
       <Promini/>
       <Aboutus trigger = {left}  right = {refname}/>

    </>
      )
}

export default Pro1