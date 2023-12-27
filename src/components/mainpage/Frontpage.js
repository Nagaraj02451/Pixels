import React, { useEffect, useRef } from 'react'
import '../styles/Frontpage.css'
import logoimg from "../svg/logo.svg"
import dotimg from "../svg/dot.svg"
import arrowimg from "../svg/arrow.svg"
import dsnimg from "../svg/dsn.svg"
import Work from './Work'
import Projects from './Projects'
import Aboutus from './Aboutus'

const Frontpage = () => {
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
    <header id='header' className='head-container'>

        <div className='fullpage'>
           <div className='nav'>

                <div className='nav1'>
                    <img src={logoimg}></img>
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

              <div className='middle'>
            

                 <div className='middle1'>A Design & Digital Agency</div>
                 <div className='middle2'>That Elevates Your Brand,<br></br> One Pixel At a Time</div>
              </div>
       

              <div className='line'><hr></hr></div>
              
              <div className='last'>
                      <div className='last01'>
                        <div className='last1'>
                           
                         
                                 <div  className='last11'>LOCATION</div>
                                <div className='last12'>OOTY</div>
                                </div>
                               
                     
                      <div className='last2'>

                         <div className='last21'>SERVICES</div>
                       <div className='last22'>
                       Branding <br/>
                       Web Design & Development <br/>
                       Digital Marketing <br/>
                       Social Media Management <br />
                       Graphic Design <br/>
                       Content Creation <br/>
                       SEO
                       </div>
                       </div>
                    </div>
                  
                      <div className='last02'>
                      <div className='last3'>
                      
                          <div className='last31'>CONTACT</div>
                         <a href='https://bento.me/43pixels'>
                         <div className='last32'><img src={arrowimg}/></div>
                          </a> 
                     
                    </div>
                </div>

              </div>


              
            </div>
    </header>

   <Aboutus trigger = {left}  right = {refname}/>


    </>
  )
}

export default Frontpage