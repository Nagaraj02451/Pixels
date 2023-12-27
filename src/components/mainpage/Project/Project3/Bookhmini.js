import React, { useEffect, useRef } from 'react'
import '../Project1/Indulasamini.css'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"
import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
import Aboutus from '../../Aboutus'

const Bookhmini = () => {
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
                  <div className='clientmini2' id='clientmini'> <div className='clientmini21'><img src="img/booklogo.webp"/></div> </div>
 
                  <div  className='clientmini3' id='clientmini'>Belvedere Groups: A pinnacle of luxury staycations in Lovedale, Ooty, offering elegance, tranquility, and unparalleled experiences.</div>
                  <div  className='clientmini4' id='clientmini'>  Industry </div>
                       
                        <div  className='clientmini5'>Book Store</div>
                        <div  className='clientmini6' id='clientmini'> <div className='clientmini61'><img src='/img/book1.webp'/></div></div>
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
                  <div className='projectmini11'>After conducting extensive research and analysis of our target audience and the competitive landscape, we arrived at the name 'Book Haven' as the best option for our new family store that sells books to seniors. The name 'Book Haven' conveys a sense of comfort, warmth, and relaxation that aligns with our brand's values of providing a welcoming and cozy atmosphere for our customers to enjoy their favorite books.
                  <br></br>
                  <br></br>

To complement the name, we developed the tagline 'Discover the Joy of Reading Again' to emphasize the unique value proposition of our brand. We want to convey that our store is not just a place to buy books, but also a place to rediscover the joy of reading. We believe that this tagline will resonate with our target audience of seniors who may have lost touch with the pleasure of reading and are looking to reignite their passion for books.                       <br></br>
 <br></br>

Overall, we are confident that the combination of the name 'Book Haven' and the tagline 'Discover the Joy of Reading Again' accurately represents our brand's values, mission, and unique selling proposition, and will appeal to our target audience.</div>
                
               
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
        <img src='/img/book2.webp'  />
        </div>
        </div>      

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/book3.webp' />
        </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/book4.webp'/>
       </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/book5.webp'/>
        </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/book6.webp'/>
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

export default Bookhmini