import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'

import Aboutus from '../../Aboutus'
import Bookhmini from './Bookhmini'



const Bookh1 = () => {
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
              <div > <a href='/bookh'> About the Client</a></div>
            <div className='org1'><a href='/bookh1'>  Projects Overview</a></div>
            <div><a href='/bookh2'>  Services Offered</a></div>
            {/* <div>Creative Process</div> */}
            <div><a href='/bookh3'>Team</a></div>

                </div>

                <div className='int223'>
                  <div className='int2231'>After conducting extensive research and analysis of our target audience and the competitive landscape, we arrived at the name 'Book Haven' as the best option for our new family store that sells books to seniors. The name 'Book Haven' conveys a sense of comfort, warmth, and relaxation that aligns with our brand's values of providing a welcoming and cozy atmosphere for our customers to enjoy their favorite books.
                  <br></br>
                  <br></br>

To complement the name, we developed the tagline 'Discover the Joy of Reading Again' to emphasize the unique value proposition of our brand. We want to convey that our store is not just a place to buy books, but also a place to rediscover the joy of reading. We believe that this tagline will resonate with our target audience of seniors who may have lost touch with the pleasure of reading and are looking to reignite their passion for books.                       <br></br>
 <br></br>

Overall, we are confident that the combination of the name 'Book Haven' and the tagline 'Discover the Joy of Reading Again' accurately represents our brand's values, mission, and unique selling proposition, and will appeal to our target audience.</div>
                </div>
                 <br></br>
                
                  
                 </div>

               </div>
   
       </div>
       </div>
       <Bookhmini/>
       <Aboutus trigger = {left}  right = {refname}/>

    </>
  )
}

export default Bookh1