import React, { useEffect, useRef } from 'react'
import '../Project1/Indulasamini.css'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"
import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
import Aboutus from '../../Aboutus'

const Vachismini = () => {
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
<div className='mini1'>
        <div className='mini01'>
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



<div className='mini02'>

<div class="accordion" id="accordionExample">
  <div class="accordion-item"  className='point1'>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className='mini021  hover-underline-animation' id='minimini1'>
      About the Client      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body"  className='mini022'>
      <div className='mini0221'>
                  <div className='clientmini1' id='clientmini00'><img src={a2}/></div>
                  <div className='clientmini2' id='clientmini'> <div className='clientmini21'><img src="./img/vachislogo.webp"/></div> </div>
 
                  <div  className='clientmini3' id='clientmini'>Belvedere Groups: A pinnacle of luxury staycations in Lovedale, Ooty, offering elegance, tranquility, and unparalleled experiences.</div>
                  <div  className='clientmini4' id='clientmini'>  Industry </div>
                       
                        <div  className='clientmini5'>Bed & Breakfast</div>
                        <div  className='clientmini6' id='clientmini'> <div className='clientmini61'><img src='/img/v1.webp'/></div></div>
               </div>
            
      </div>
    </div>
  </div>

  <div class="accordion-item"  className='point1'>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className='mini021  hover-underline-animation' id='minimini2'>
      Projects Overview      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body"  className='mini022'>
      <div className='projectmini1'>
                  <div className='projectmini11'>Welcome to the showcase of our work for the exquisite Belvedere Groups, a haven of luxury staycations nestled in the heart of Lovedale, Ooty. Our collaboration with Vachi's Belvedere, a sublime subdivision, was a testament to refined elegance.<br></br>
                  <br></br>

We embarked on a journey to craft a distinct brand identity, capturing the essence of opulence and tranquility. From striking banners that beckon with allure, to menus that tantalize the senses, every element exudes a modern sophistication.
<br></br>
<br></br>

The website we designed is a virtual gateway to this idyllic retreat, seamlessly blending functionality with aesthetics, offering guests a taste of the grandeur that awaits. Complementing this digital presence is a business card that embodies the same sense of luxury and attention to detail.<br></br>
<br></br>
<br></br>

Explore our portfolio to witness how we transformed Belvedere Groups into a visual masterpiece, embodying the epitome of modern luxury in Lovedale, Ooty.</div>
                
               
                 </div>
                    
     </div>
    </div>
  </div>

 

  <div class="accordion-item"  className='point1'>
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className='mini021  hover-underline-animation' id='minimini3'>
      Branding • Packaging       </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body"  className='mini022'>

   
      <div className='branding1'>

      <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/v2.webp'  />
        </div>
        </div>      

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/v3.webp' />
        </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/v4.webp'/>
       </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/v5.webp' />
        </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/v06.webp' />
        </div>
        </div>  


        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/v7.webp' />
        </div>
        </div>  

       




        </div>      </div>   

     
    </div>
  </div>




  <div class="accordion-item"  className='point1'>
    <h2 class="accordion-header" id="headingFour"> 
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className='mini021  hover-underline-animation' id='minimini4'>
      Team
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body"  className='mini022'>
      <div className='teammini'>
                    <div className='teammini1'>Creators and Contributors</div>
                    <div  className='teammini2'>Graphic Designer : Arpita Mitra, Praveen Rathan</div>
                    <div  className='teammini2'> Project Manager : Praveen Rathan</div>

               </div>      </div>
    </div>
  </div>
</div>

</div>

     
</div>
</div>
<Aboutus trigger = {left}  right = {refname}/>
</>
  )
}

export default Vachismini