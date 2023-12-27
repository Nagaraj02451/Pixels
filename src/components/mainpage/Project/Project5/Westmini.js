import React, { useEffect, useRef } from 'react'
import '../Project1/Indulasamini.css'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"
import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
import Aboutus from '../../Aboutus'


const Westmini = () => {
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
                  <div className='clientmini2' id='clientmini'> <div className='clientmini21'><img src="img/wlogo3.webp"/></div> </div>
 
                  <div  className='clientmini3' id='clientmini'>he West Wind, an idyllic Bed & Breakfast nestled in Ooty, offers serene escapes amidst nature's tranquility and warm hospitality.</div>
                  <div  className='clientmini4' id='clientmini'>  Industry </div>
                       
                        <div  className='clientmini5'>Bed & Breakfast</div>
                        <div  className='clientmini6' id='clientmini'> <div className='clientmini61'><img src='/img/w1.webp'/></div></div>
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
                  <div className='projectmini11'>Our task at The West Wind was to encapsulate the essence of their serene retreat within a captivating online presence. We aimed to showcase their scenic location and exceptional hospitality while ensuring seamless user experience.</div>
                  <div className='westlink'> <a href=' https://thewestwindooty.com'> https://thewestwindooty.com</a></div>

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
        <img src='/img/w2.webp'  />
        </div>
        </div>      

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/w3.webp' />
        </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/w4.webp' />
       </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/w5.webp' />
        </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/w6.webp' />
        </div>
        </div>  


        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/w7.webp' />
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
                    <div  className='teammini2'>Designer : Praveen Rathan</div>
                    <div  className='teammini2'>Web Developement : Nagaraj & Chandru</div>

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

export default Westmini