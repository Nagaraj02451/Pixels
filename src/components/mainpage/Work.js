import React, { useEffect, useRef } from 'react'
import logo1img from "../svg/logo1.svg"
import odotimg from "../svg/orenge.svg"
import dotimg from "../svg/dot.svg"
import bdotimg from "../svg/black.svg"
import dsn1 from "../svg/dsn1.svg"
import '../styles/Work.css'
import Aboutus from './Aboutus'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Work = () => {

  const refname = useRef()

const right =()=>{
  refname.current.classList.add("spagejbhn")
  // alert("ghbjn")
}


const left =()=>{
  refname.current.classList.remove("spagejbhn")
  // alert("ghbjn")
}

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1700 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1700, min: 1000 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1000, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
   
    }


  return (
    <>
    <div className='work'>
        <div className='work1'>

               <div className='nav'>
                 <div className='nav1'>
                 <a href='/'>  <img src={logo1img}/></a>
                </div>
                <div className='nav2'>
                  <div className='navnav'>
                  <div className='one'><img src={odotimg}/>     <a href='/work'> Work      </a> </div>
                 
                   <div className='two'><img src={bdotimg}/> <span onClick={right}>Agency</span></div>
                  </div>
                  
                </div>
                </div>  

                <div className='work2'>
                    <div className='work02'>
                       <div className='work21'>Crafting excellence, pixel by pixel, to  elevate your brand beyond expectations.</div>
                       <div className='work22'><img src={dsn1}/></div>
                     </div>
                </div>
<br></br>

                <div className='work3'>
                    <div className='work03'>
                      
                         
                    <Carousel responsive={responsive} className='kopkopkopkop'>

  <div className='imagelopTT'>
  <a href='/Vachis'>
  <div className='imagelopT'>
    <img src='/img/bgroups04.webp' data-aos="fade-up" data-aos-duration="2000" alt='' />
 </div>
 </a>
  </div>   
  
  <div  className='imagelopTT'>
  <a href='/West'>
  <div className='imagelopT'>
    <img src='/img/w1.webp' data-aos="fade-up" data-aos-duration="2000" alt='' />
 </div>
 </a>
  </div>                 
      
  <div  className='imagelopTT'>
  <a href='/Bookh'>
  <div className='imagelopT'>
    <img src='/img/Book Haven.webp' data-aos="fade-up" data-aos-duration="2000" alt='' />
 </div>
 </a>
  </div>                 
      
  <div  className='imagelopTT'>
  <a href='/Indulasa'>
  <div className='imagelopT'>
    <img src='/img/indulasa.webp' data-aos="fade-up" data-aos-duration="2000" alt='' />
 </div>
 </a>
  </div>                 
      
  <div  className='imagelopTT'>
  <a href='/Pro'>
  <div className='imagelopT'>
    <img src='/img/u1.webp' data-aos="fade-up" data-aos-duration="2000" alt='' />
 </div>
 </a>
  </div>                 
      
  <div  className='imagelopTT'>
  <a href='/Indulasa'>
  <div className='imagelopT'>
    <img src='/img/Cocoapods.webp' data-aos="fade-up" data-aos-duration="2000" alt='' />
 </div>
 </a>
  </div>                 
                    
      




</Carousel>;

                    </div>
                </div>
             
              
                      
        </div>
    </div>
    <Aboutus trigger = {left}  right = {refname}/>

    </>
  )
}

export default Work