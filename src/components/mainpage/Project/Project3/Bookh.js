import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'
 import '../Project3/Bookh.css'

import Aboutus from '../../Aboutus'
import Bookhmini from './Bookhmini'


const Bookh = () => {
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
                
            <div className='org1'> <a href='/bookh'> About the Client</a></div>
            <div><a href='/bookh1'>  Projects Overview</a></div>
            <div><a href='/bookh2'>  Services Offered</a></div>
            {/* <div>Creative Process</div> */}
            <div><a href='/bookh3'>Team</a></div>
            </div>

             <div className='int112'>
              <div className='int1121' id='int11211'>
                  
                   <div className='int11211' id='int11211'>
                      <div className='intone'><img src={a2}/></div>
                      <div className='intint'> <div className='intone2'><img src="img/booklogo.webp"/></div> </div>
                       <div className='intone3'>Belvedere Groups: A pinnacle of luxury staycations in Lovedale, Ooty, offering elegance, tranquility, and unparalleled experiences.</div>
                      
                       <div>
                        <div className='intone4'>  Industry </div>
                        <br></br>
                        <div className='intone5'>Book Store</div>
                        </div> 
            </div>
            </div>


             <div className='int1122'>
                  <div className='intimg'>
                    <img src='/img/book1.webp'/>
                   </div>
              </div>  
              </div>


          </div>
       </div>


        </div>
    </div>
    <Bookhmini/>
    
   <Aboutus trigger = {left}  right = {refname}/>
    </>
  )
}

export default Bookh