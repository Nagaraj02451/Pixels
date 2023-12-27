import React, { useEffect, useRef } from 'react'

import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa1.css'
import Indulasamini from './Indulasamini'
import Aboutus from '../../Aboutus'


const Indulasa1 = () => {
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
                 <div > <a href='/indulasa'> About the Client</a></div>
                <div className='org2'><a href='/indulasa1'>  Projects Overview</a></div>
                <div><a href='/indulasa2'>  Services Offered</a></div>
                {/* <div>Creative Process</div> */}
                <div><a href='/indulasa4'>Team</a></div>

                </div>

                <div className='int223'>
                  <div className='int2231'>In crafting the visual identity for the luxury Kanchipuram silk saree brand, Indulasa, The Creative Hive sought to encapsulate a celebration of elegance, tradition, and empowerment. Every facet of this project, from color selection to font choice, was meticulously curated to resonate with the brand's mission of empowering young women to embrace their individuality through the timeless allure of South Indian silk sarees.</div>
                </div>
                 <br></br>
                 {/* <div className='int224'>
                     <div className='int22411'> 
                      <div className='int2241'><img src='/img/indulasa.png' /></div>
                    </div>
                    <div className='int22412'> 
                        <div className='int2241'><img src='/img/indulasa.png' /></div>
                    </div>
                    <div className='int22412'> 
                         <div className='int2241'><img src='/img/indulasa.png' /></div>
                    </div>
                 </div> */}
          
          <div className='int225'>
                      
                      <div className='int2251  chan' ><img src='/img/Rectangle-22.webp' /></div>
                                    

                       <div className='int2252 chan'><img src='/img/Rectangle-23.webp' /></div>
                      <div className='int2253 chan'><img src='/img/Rectangle-23.webp' /></div>
                  </div>
                  
                 </div>

               </div>
   
       </div>
       </div>
       <Indulasamini/>
       <Aboutus trigger = {left}  right = {refname}/>

    </>
  )
}

export default Indulasa1