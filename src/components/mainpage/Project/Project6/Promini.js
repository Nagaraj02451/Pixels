import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa.css'
import "../../../mainpage/Project/Project6/Pro2.css"
import Aboutus from '../../Aboutus'




const Promini = () => {
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
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body"  className='mini022'>
      <div className='mini0221'>
                  <div className='clientmini1' id='clientmini00'><img src={a2}/></div>
                  <div className='clientmini2' id='clientmini'> <div className='clientmini21'><img src="img/u0.webp"/></div> </div>
 
                  <div  className='clientmini3' id='clientmini'>Pioneering software solutions. Seamlessly blending innovation with user-centric design.</div>
                  <div  className='clientmini4' id='clientmini'>  Industry </div>
                       
                        <div  className='clientmini5'>Software</div>
                        <div  className='clientmini6' id='clientmini'> <div className='clientmini61'><img src='/img/u1.webp'/></div></div>
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
                  <div className='projectmini11'>The unisight wordmark features a clean, futuristic sans-serif font that conveys a sense of modernity and innovation. The font is sleek and streamlined, with subtle curves and angles that give it a distinct visual identity. The letters are spaced out slightly to enhance readability and give the logo a spacious feel.<br></br><br></br>
To create a sense of harmony and balance, all the letters in unisight are in lowercase, giving the logo a more casual and approachable feel. The font is still bold and modern, but the lowercase letters create a softer, more inviting vibe.<br></br><br></br>
The color palette for the wordmark is minimalistic and can be monochromatic or two-toned, depending on the desired style. The overall effect is a futuristic, sleek, and approachable wordmark that effectively communicates the innovative and forward-thinking nature of the unisight brand.</div>
                
               
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
        <img src='/img/u2.webp'  />
        </div>
        </div> 
        <div className='kojhugT'>
 
 </div>
 
        <section  id='uni0'>
   
   <div  id='uni1'>
       <img src='/img/u3.webp' />
   </div>
   <div  id='uni2'>
       <img src='/img/u4.webp' />
   </div>
 
</section>


<div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/u5.webp'/>
       </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/u6.webp'/>
        </div>
        </div> 

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/u7.webp'/>
       </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/u8.webp'/>
        </div>
        </div> 

        <div className='top00'>

<div  className='top000'>
 
  <div id='top2'>Our mockups encapsulate Unisight's intuitive interfaces, seamlessly integrating complex functionalities with an elegant user experience. Each design element, from sleek navigation bars to intuitive data visualizations, reflects the brand's ethos of simplifying the intricate.</div>
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
                    <div  className='teammini2'>Brand Strategist : Praveen Rathan</div>
                    <div  className='teammini2'> Graphic Designer : Arpita Mitra</div>
                    <div className='teammini2'>Copywriter : Aliva P Dhal</div>     
                    <div className='teammini2'>Product Designer : Praveen Rathan & Arpita Mitra</div>
                    <div className='teammini2'>Project Manager : Arpita Mitra</div>


               </div>      </div>
    </div>
  </div>
</div>

</div>

     
</div>
</div>
<Aboutus trigger = {left}  right = {refname}/>
</>  )
}

export default Promini