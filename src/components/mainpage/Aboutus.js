import React, { useEffect, useRef } from 'react'
import '../styles/Aboutus.css'
import close from "../svg/close.svg"
import Last from "../svg/svg.svg"


const Aboutus = ({trigger,right}) => {
  // const refname = useRef()

  // const right =()=>{
  //   refname.current.classList.add("spagejbhn1")
  
  // }

  // const trigger =()=>{
  //   refname.current.classList.add("spagejbhn1")
    
  // }
  return (
<>
 {/* nextpage */}
 <div className='spage'  ref={right}>
    <div className='fullcontent' >
       
        <div className='fullcontent2'>
          <div className='close'  ><span onClick={()=>trigger()}><img src={close}/></span></div>
           <div className='agency'>
                <div className='a1'>Agency</div>
                <div className='a2'>
                     <div className='a21'>Crafting Unforgettable First<br/> Impressions for Your Business!</div>
                     <br/>
                       <div className='a22'>  Experience our expertise in crafting interactive stories with flawless design and mesmerizing animations that leave a lasting mark on your audience.</div>
                </div>
           </div>

           <br/>
           <br/>
          <hr/>
           <br/>
         
          <div className='about'>
                <div className='b1'>About Us</div>
                <div className='b2'>
                     <div className='b21'>We're a design and digital agency crafting innovative brand experiences. Situated in Ooty, our expert team blends creativity and technology, delivering exceptional designs, websites, and campaigns within your budget. We breathe life into concepts, ensuring your brand exceeds expectations. Elevate your brand with our expertise.</div>
                </div>
           </div>

           <br/>
           <br/>

           <div className='col3'>
              <img src='/img/img1.png'></img>
           </div>

           <br/>
           <br/>
           <hr/>
          
           <br/>

           <div className='services'>
                <div className='c1'>Services</div>
                <div className='c2'>
                     <div className='c21'> From Concept to Campaign </div>
                     <br/>
                     <br/>
                     <div className='c22' >
                        <div className='c221'>Branding  </div> 
                         <img src='/img/plus.png'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample"></img>
                     </div>
                     <div class="collapse" id="collapseExample1" >
                     <div class="card-body" >
                     We'll craft a brand identity that's as unique as your grandma's secret cookie recipe (and just as irresistible).

                      </div>
                     </div>

        
           <br/>
           <hr/>
       
           <br/>            
           


           <div className='c22' >
                        <div className='c221'>Web Design & Development</div> 
                         <img src='/img/plus.png'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample"></img>
                     </div>
                     <div class="collapse" id="collapseExample2">
                     <div class=" card-body">
                     We build websites that are so smooth, they'll make scrolling feel like butter. (But please, don't try to spread butter on your screen. We're not responsible for sticky keyboards.)

                      </div>
                 </div>

                 
           <br/>
           <hr/>
     
           <br/>            
           


           <div className='c22' >
                        <div className='c221'>Digital Marketing  </div> 
                         <img src='/img/plus.png'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample"></img>
                     </div>
                     <div class="collapse" id="collapseExample3">
                     <div class="card-body">
                     We're the social media whisperers who'll get your brand trending like the hottest hashtag.

                      </div>
                 </div>


               
           <br/>
           <hr/>
           <br/>
                    
           


           <div className='c22' >
                        <div className='c221'>UX (User Experience) </div> 
                         <img src='/img/plus.png'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample"></img>
                     </div>
                     <div class="collapse" id="collapseExample4" >
                     <div class="card-body" >
                     We'll handle your online presence like it's our own precious puppy. No spammy paws or embarrassing bathroom selfies, we promise!‍♀


                      </div>
                 </div>

                 
           <br/>
           <hr/>
           <br/>
                     
           


           <div className='c22' >
                        <div className='c221'> Packaging</div> 
                         <img src='/img/plus.png'class="btn btn-primary-black" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample"></img>
                     </div>
                     <div class="collapse" id="collapseExample5">
                     <div class=" card-body">
                     From logos that leap off the page to infographics that make complex things crystal clear, we're the graphic gurus who'll make your visuals sing.

                      </div>
                 </div>

                
           <br/>
           <hr/>
    
           <br/>            
           

          
           

           
           
        
                      
                </div>
           </div>
           <br></br>
           <br></br>
           <hr></hr>
               <br/>
               
           <div className='contact'>
          
            <div className='d1'>
                 <div className='d11'>Contact</div>
                 <br/>
                 
                  <img src={Last}></img>
            </div>

            
            <div className='d2'>
                <div className='d21'>
                    <br/>
                  <div className='d211'>Write to Us</div>
              <a href='hello@43pixels.agency'>

              <div className='d212'>hello@43pixels.agency</div>

              </a>
                  {/* <div className='d212'>hello@43pixels.agency</div> */}
                  </div>
                  <br/>
                  <br/>

          
                  <div className='d22'>
                  <div className='d221'>Address</div>
                  

                  <div className='d222'>43 Pixels, 190 D, Rose Mount,<br/> Tamilagam Road, Ooty</div>
                </div>
            </div>
           
            <div className='d3'>
            <br/>
                  <div className='d31'>
                    <div className='d311'>LinkedIn</div> <img src='/img/arrow.svg'></img>
                    </div>
                  <br/>

                  <div className='d31'>
                    <div className='d312'>Instagram  </div><img src='/img/arrow.svg'></img>
                    </div>                  <br/>

                  <div className='d31'>
                  <div className='d313'>Behance </div><img src='/img/arrow.svg'></img>
                    </div>                  <br/>

                  <div className='d31'>
                  <div className='d314'>Twitter </div><img src='/img/arrow.svg'></img>
                    </div>
            </div>


           </div>
          
       
           <div className='year'>@2023</div>   
    

        </div>
      </div>
      </div>
      
</>
  )
}

export default Aboutus

// .c2 .c22 img{
//  color: #D1D3D4;
//  font-size: 25px;
//  font-style: normal;
//  font-weight: 700;
//  line-height: 24px; 
 

// }