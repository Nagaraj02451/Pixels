import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'

import Aboutus from '../../Aboutus'
import Bookhmini from './Bookhmini'


const Bookh2 = () => {
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
             <div > <a href='/bookh'> About the Client</a></div>
            <div ><a href='/bookh1'>  Projects Overview</a></div>
            <div className='org1'><a href='/bookh2'>  Services Offered</a></div>
            {/* <div>Creative Process</div> */}
            <div><a href='/bookh3'>Team</a></div>

 
             </div>
 
         <div className='service1'>
           <div className='service11'>Branding • Packaging</div>
         </div>
 
 
         <section className='fdghsfc'>    
 
         <div className='kojhugT'>
 
 </div>

 <div className='edxcdfc'>
     <img src='/img/book2.webp' />
 </div>
 
 <div className='kojhugT'>
 
 </div>
 <div className='edxcdfc'>
     <img src='/img/book3.webp' />
 </div>
 
 </section>
 <div className='kojhugT'>
 
 </div>

 
 <section className='liknjnnkT'>
   
     <div className='gfcgfcT'>
         <img src='/img/Book4.webp' />
     </div>
     
    <div className='kojhugT'>
 
   </div>
   
   <div className='kojhugT'>
 
 </div>
 
 <div className='kojhugT'>
 
 </div>
     <div className='gfcgfcT'>
         <img src='/img/book5.webp' />
     </div>
   
 </section>
 
 
 
 <div className='kojhugT'>
 
 </div>
 
 <section className='fdghsfc'>
 
 <div className='edxcdfc'>
     <img src='/img/book6.webp' />
 </div>
 <div className='kojhugT'>
 
 </div>

 
 </section>
 
 </div>
 </div>
 
 
 
 
 
     </div>
    </div>
    <Bookhmini/>
    <Aboutus trigger = {left}  right = {refname}/>
 
    </>
  )
}

export default Bookh2