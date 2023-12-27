import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'

import Aboutus from '../../Aboutus'
import Promini from '../Project6/Promini'


const Pro3 = () => {
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
 
        <div className='int11'>
           <div className='int111'>
             <div className='int1111'>
                 
             <div > <a href='/pro'> About the Client</a></div>
            <div><a href='/pro1'>  Projects Overview</a></div>
            <div><a href='/pro2'>  Services Offered</a></div>
            {/* <div>Creative Process</div> */}
            <div className='org1'><a href='/pro3'>Team</a></div>
             </div> 
 
             <div className='team1'>
                  <div className='team11'>Creators and Contributors</div>
                 <div className='team12'>
                     <div>Brand Strategist : Praveen Rathan</div>
                     <div>Graphic Designer : Arpita Mitra</div>
                     <div>Copywriter : Aliva P Dhal</div>
                     <div>Product Designer : Praveen Rathan & Arpita Mitra</div>
                     <div>Project Manager : Arpita Mitra</div>
 
                 </div>
             </div>
             </div>
         </div>
 
 
             
       </div>
   </div>
   <Promini/>
   <Aboutus trigger = {left}  right = {refname}/>
 
   </>  )
}

export default Pro3