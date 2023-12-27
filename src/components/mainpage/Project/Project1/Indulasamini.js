import React, { useEffect, useRef } from 'react'
import '../Project1/Indulasamini.css'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"
import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
import Aboutus from '../../Aboutus'



const Indulasamini = () => {
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
                  <div className='clientmini2' id='clientmini'> <div className='clientmini21'><img src={prosvg}/></div> </div>
 
                  <div  className='clientmini3' id='clientmini'>A Luxury Silk Saree Brand with a Timeless elegance collection</div>
                  <div  className='clientmini4' id='clientmini'>  Industry </div>
                       
                        <div  className='clientmini5'>Luxury Fashion</div>
                        <div  className='clientmini6' id='clientmini'> <div className='clientmini61'><img src='/img/indulasa.png'/></div></div>
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
                  <div className='projectmini11'>In crafting the visual identity for the luxury Kanchipuram silk saree brand, Indulasa, The Creative Hive sought to encapsulate a celebration of elegance, tradition, and empowerment. Every facet of this project, from color selection to font choice, was meticulously curated to resonate with the brand's mission of empowering young women to embrace their individuality through the timeless allure of South Indian silk sarees.</div>
                 <div className='projectminipic1'> 
                       <div className='projectmini12' ><div className='projectmini121'><img src='/img/Rectangle-22.webp' /></div></div>

                 </div>
                 <div className='projectminipic2'> 
                 <div className='projectminipic21'>
                 <div className='projectmini122'><img src='/img/Rectangle-23.webp' /></div>
                     <div className='projectmini123'><img src='/img/Rectangle-23.webp' /></div>

                 </div>
                    
                 </div>
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
        <img src='/img/three01.webp'   />
        </div>
        </div>      

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/three02.webp' />
        </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/three03.webp' />
       </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/Rectangle 2.webp' />
        </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/Rectangle 3.webp' />
        </div>
        </div>  


        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
        <img src='/img/indulasa.webp' />
        </div>
        </div>  

        <div className='brandimg1' id='brandpadding'>
        <div className='brandimg01'>
       <img src='/img/Rectangle 5.webp' />
       </div>
        </div>  

        

        <div className='branding2' id='brandpadding'>
          <div className='branding21'>Why "Indulasa"</div>
          <div className='branding22'><span>The name "Indulasa" emerges from the fusion of "indulge" and "saree",</span> echoing the brand's core essence. It encapsulates the notion of luxuriating in the opulence and allure of authentic South Indian silk sarees. This name embodies our commitment to offering a product that invites women to indulge in their unique style while celebrating tradition.
         </div>
        </div>

        <div className='branding2' id='brandpadding'>
          <div className='branding21'>Colour Palette</div>
          <div className='branding22'>The primary color, #8866C4, was chosen for its regal elegance, reflecting the premium quality of the Kanchipuram silk sarees. It embodies a sense of luxury and sophistication, aligning perfectly with the brand's vision. The gradient to #CFB1ED soft lavender adds a touch of femininity and delicacy, symbolizing empowerment through grace.
        </div>

        </div>


        <div className='branding2' id='brandpadding'>
          <div className='branding21'>Font and Logo</div>
          <div className='branding22'> The wordmark, designed with a semi-serif decorative display font, was chosen to strike a harmonious balance between tradition and modernity. It captures the timeless allure of South Indian craftsmanship while infusing a contemporary touch. This elegant font choice communicates the brand's commitment to impeccable craftsmanship and attention to detail
          .</div>

        </div>


        <div className='branding2' id='brandpadding'>
          <div className='branding21'>Mascot and Pattern</div>
          <div className='branding22' >
          The brand's mascot, a delicate peacock, is a symbol of grace, beauty, and tradition in South Indian culture. It serves as a visual representation of the brand's ethos and is a testament to the rich cultural heritage from which Indulasa draws inspiration.
          <br></br>
          <br></br>
           The pattern used in the branding echoes the intricate designs found in Kanchipuram silk sarees. It weaves a visual narrative of tradition and artistry, reflecting the dedication to creating sarees that are more than just fabric, but pieces of art that tell a story.
           <br></br>
           <br></br>
           In every element of this project, The Creative Hive sought to create a visual identity that resonates with Indulasa's target audience. From the choice of colors and fonts to the incorporation of the mascot and pattern, every detail was meticulously curated to encapsulate the brand's essence of elegance, tradition, and empowerment. The result is a visual identity that is both modern and elegant, reflecting the brand's commitment to providing young women with a product that empowers them to celebrate their individuality. Indulasa is more than just a brand; it's a celebration of the beauty and grace that every woman possesses.
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
                    <div  className='teammini2'> Graphic Designer : Arpita Mitra & Nishanthini</div>

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

export default Indulasamini