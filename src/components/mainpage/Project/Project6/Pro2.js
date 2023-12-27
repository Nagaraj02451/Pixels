import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'
 import '../../../mainpage/Project/Project6/Pro2.css'

import Aboutus from '../../Aboutus'
import Promini from '../Project6/Promini'

const Pro2 = () => {
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
    <div className='int00'>
     <div className='int000'>
 
 
                  
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
 
 
        <div className='int44'>
           <div className='int444'>
             
             <div className='int1111'>
                
             <div > <a href='/pro'> About the Client</a></div>
            <div><a href='/pro1'>  Projects Overview</a></div>
            <div className='org1'><a href='/pro2'>  Services Offered</a></div>
            {/* <div>Creative Process</div> */}
            <div><a href='/pro3'>Team</a></div>

 
             </div>
 
         <div className='service1'>
           <div className='service11'>Branding • Packaging</div>
         </div>
 
 
         <section className='fdghsfc'>    
 
         <div className='kojhugT'>
 
 </div>

 <div className='edxcdfc'>
     <img src='/img/u2.webp' />
 </div>
 
 <div className='kojhugT'>
 
 </div>
 
 
 </section>
 

 
 <section  id='uni0'>
   
     <div  id='uni1'>
         <img src='/img/u3.webp' />
     </div>
     
    
 

     <div  id='uni2'>
         <img src='/img/u4.webp' />
     </div>
   
 </section>
 
 
 
 <div className='kojhugT'>
 
 </div>
  
 <section className='liknjnnkT'>
   
     <div className='gfcgfcT'>
         <img src='/img/u5.webp' />
     </div>
     
    <div className='kojhugT'>
 
   </div>
   
   <div className='kojhugT'>
 
 </div>
 
 <div className='kojhugT'>
 
 </div>
     <div className='gfcgfcT'>
         <img src='/img/u6.webp' />
     </div>
   
 </section>
 <section className='fdghsfc'>
 
 <div className='edxcdfc'>
     <img src='/img/u7.webp' />
 </div>
 <div className='kojhugT'>
 
 </div>

 
 </section>
 <section className='fdghsfc'>
 
 <div className='edxcdfc'>
     <img src='/img/u8.webp' />
 </div>
 <div className='kojhugT'>
 
 </div>

 
 </section>
 <div className='top00'>

<div  className='top000'>
 
  <div id='top2'>Our mockups encapsulate Unisight's intuitive interfaces, seamlessly integrating complex functionalities with an elegant user experience. Each design element, from sleek navigation bars to intuitive data visualizations, reflects the brand's ethos of simplifying the intricate.</div>
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

export default Pro2