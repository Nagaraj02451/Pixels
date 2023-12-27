import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'
 import '../../../mainpage/Project/Project5/West1.css'

import Westmini from './Westmini'
import Aboutus from '../../Aboutus'

const West1 = () => {
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
              <div> <a href='/west'> About the Client</a></div>
            <div  className='org1'><a href='/west1'>  Projects Overview</a></div>
            <div><a href='/west2'>  Services Offered</a></div>
            {/* <div>Creative Process</div> */}
            <div><a href='/west3'>Team</a></div>

                </div>

                <div className='int223'>
                  <div className='int2231'>Our task at The West Wind was to encapsulate the essence of their serene retreat within a captivating online presence. We aimed to showcase their scenic location and exceptional hospitality while ensuring seamless user experience.</div>
               <div className='westlink'> <a href=' https://thewestwindooty.com'> https://thewestwindooty.com</a></div>
                </div>
                 <br></br>
       
         
                  
                 </div>

               </div>
   
       </div>
       </div>
       <Westmini/>
       <Aboutus trigger = {left}  right = {refname}/>

    </>
  )
}

export default West1