




import React, { useEffect, useRef } from 'react'
import logoimg from "../../../svg/logo.svg"
import dotimg from "../../../svg/dot.svg"

import prosvg from "../../../svg/prologo.svg"
import a2 from "../../../svg/a2.svg"
 import '../../../mainpage/Project/Project1/Indulasa2.css'
import Indulasamini from './Indulasamini'
import Aboutus from '../../Aboutus'


const Indulasa2 = () => {
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
            <div > <a href='/indulasa'> About the Client</a></div>
            <div><a href='/indulasa1'>  Projects Overview</a></div>
            <div className='org1'><a href='/indulasa2'>  Services Offered</a></div>

            {/* <div>Creative Process</div> */}
            <div><a href='/indulasa4'>Team</a></div>

            </div>

        <div className='service1'>
          <div className='service11'>Branding • Packaging</div>
        </div>


        
<section className='rectangle70'>
   <div className='rectangle70a'>
    
    <div className='rectangle75'>
        <img src='/img/three01.webp'   />
     </div>
     <div className='kojhugT'>

    </div>
    <div className='kojhugT'>

    </div>
    <div className='kojhugT'>

    </div>
    <div className='rectangle76'>
    <img src='/img/three02.webp' />
    </div>
    <div className='kojhugT'>

    </div>
    <div className='kojhugT'>

    </div>
    <div className='kojhugT'>

    </div>
    <div className='rectangle77'>
        <img src='/img/three03.webp' />
    </div>
  
  </div>   
   </section>

   <div className='kojhugT'>

   </div>


<section className='liknjnnkT'>
  
    <div className='gfcgfcT'>
        <img src='/img/Rectangle 2.webp' />
    </div>
    
   <div className='kojhugT'>

  </div>
  
  <div className='kojhugT'>

</div>

<div className='kojhugT'>

</div>
    <div className='gfcgfcT'>
        <img src='/img/Rectangle 3.webp' />
    </div>
  
</section>



<div className='kojhugT'>

</div>

<section className='fdghsfc'>

<div className='edxcdfc'>
    <img src='/img/indulasa.webp' />
</div>
<div className='kojhugT'>

</div>
<div className='edxcdfc'>
    <img src='/img/Rectangle 5.webp' />
</div>

</section>


<div className='top00'>

<div  className='top000'>
  <div id='top1'>Why "Indulasa"</div>
  <div className='kojhugT'>

</div>
  <div id='top2'><span>The name "Indulasa" emerges from the fusion of "indulge" and "saree",</span> echoing the brand's core essence. It encapsulates the notion of luxuriating in the opulence and allure of authentic South Indian silk sarees. This name embodies our commitment to offering a product that invites women to indulge in their unique style while celebrating tradition.</div>
</div>
<br></br>
<br></br>
<div  className='top000'>
  <div  id='top1'>Colour Palette</div>
  <div className='kojhugT'>

</div>
  <div  id='top2'>The primary color, #8866C4, was chosen for its regal elegance, reflecting the premium quality of the Kanchipuram silk sarees. It embodies a sense of luxury and sophistication, aligning perfectly with the brand's vision. The gradient to #CFB1ED soft lavender adds a touch of femininity and delicacy, symbolizing empowerment through grace.
</div>
</div>
<br></br>
<br></br>

<div  className='top000'>
  <div  id='top1'>Font and Logo</div>
  <div className='kojhugT'>

</div>
  <div  id='top2'>The wordmark, designed with a semi-serif decorative display font, was chosen to strike a harmonious balance between tradition and modernity. It captures the timeless allure of South Indian craftsmanship while infusing a contemporary touch. This elegant font choice communicates the brand's commitment to impeccable craftsmanship and attention to detail.</div>
</div>
<br></br>
<br></br>
<div  className='top000'>
  <div  id='top1'>Mascot and Pattern</div>
  <div className='kojhugT'>

</div>
  <div  id='top2'>The brand's mascot, a delicate peacock, is a symbol of grace, beauty, and tradition in South Indian culture. It serves as a visual representation of the brand's ethos and is a testament to the rich cultural heritage from which Indulasa draws inspiration.
  <div className='kojhugT'>

</div>
The pattern used in the branding echoes the intricate designs found in Kanchipuram silk sarees. It weaves a visual narrative of tradition and artistry, reflecting the dedication to creating sarees that are more than just fabric, but pieces of art that tell a story.
<div className='kojhugT'>

</div>
In every element of this project, The Creative Hive sought to create a visual identity that resonates with Indulasa's target audience. From the choice of colors and fonts to the incorporation of the mascot and pattern, every detail was meticulously curated to encapsulate the brand's essence of elegance, tradition, and empowerment. The result is a visual identity that is both modern and elegant, reflecting the brand's commitment to providing young women with a product that empowers them to celebrate their individuality. Indulasa is more than just a brand; it's a celebration of the beauty and grace that every woman possesses.</div>
</div>

</div>

<br></br>
<br></br>
   
  </div>
  </div>






    </div>
   </div>
   <Indulasamini/>
   <Aboutus trigger = {left}  right = {refname}/>

   </>
  )
}

export default Indulasa2