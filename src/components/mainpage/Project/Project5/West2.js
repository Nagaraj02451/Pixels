import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'

import Westmini from './Westmini'
import Aboutus from '../../Aboutus'

const West2 = () => {
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
             <div> <a href='/west'> About the Client</a></div>
            <div ><a href='/west1'>  Projects Overview</a></div>
            <div  className='org1'><a href='/west2'>  Services Offered</a></div>
            {/* <div>Creative Process</div> */}
            <div><a href='/west3'>Team</a></div>
 
             </div>
 
         <div className='service1'>
           <div className='service11'>Website Design & Development • Digital Marketing • Photography</div>
         </div>
         <br></br>
         <div >
                  <div className='int2231'>Crafting a virtual haven, we designed a website that reflected The West Wind's charm. Engaging visuals, easy navigation, and integrated booking functionalities were pivotal in enhancing user experience.
                  <br></br>
                  <br></br>

Through captivating photography and strategic digital marketing efforts, we highlighted The West Wind's allure. From picturesque landscapes to cozy interiors, our imagery conveyed the essence of a memorable stay, enticing travelers seeking respite.</div>
         </div>
          
         <div className='kojhugT'>
 
 </div>
  
 <div className='kojhugT'>
 
 </div>
  
 <div className='kojhugT'>
 
 </div>
         <section className='fdghsfc'>    

 
         <div className='kojhugT'>
 
 </div>

 <div className='edxcdfc'>
     <img src='/img/w2.webp' />
 </div>
 
 <div className='kojhugT'>
 
 </div>
 <div className='edxcdfc'>
     <img src='/img/w3.webp' />
 </div>
 
 </section>
 <div className='kojhugT'>
 
 </div>

 
 <section className='liknjnnkT'>
   
     <div className='gfcgfcT'>
         <img src='/img/w4.webp' />
     </div>
     
    <div className='kojhugT'>
 
   </div>
   
   <div className='kojhugT'>
 
 </div>
 
 <div className='kojhugT'>
 
 </div>
     <div className='gfcgfcT'>
         <img src='/img/w5.webp' />
     </div>
   
 </section>
 
 
 
 <div className='kojhugT'>
 
 </div>
 
 <section className='fdghsfc'>
 
 <div className='edxcdfc'>
     <img src='/img/w6.webp' />
 </div>
 <div className='kojhugT'>
 
 </div>
 <div className='edxcdfc'>
     <img src='/img/w7.webp' />
 </div>
 
 </section>
 
 </div>
 </div>
 
 
 
 
 
     </div>
    </div>
    <Westmini/>
    <Aboutus trigger = {left}  right = {refname}/>
 
    </>
  )
}

export default West2