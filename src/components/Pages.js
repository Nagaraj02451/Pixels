import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Frontpage from '../components/mainpage/Frontpage'
// import Aboutus from './mainpage/Aboutus';
import Projects from './mainpage/Projects';
import Work from './mainpage/Work';

import Indulasa from './mainpage/Project/Project1/Indulasa';
import Indulasa1 from './mainpage/Project/Project1/Indulasa1';
import Indulasa2 from './mainpage/Project/Project1/Indulasa2';
import Indulasa4 from './mainpage/Project/Project1/Indulasa4';
import Indulasamini from './mainpage/Project/Project1/Indulasamini'

import Vachis from './mainpage/Project/Project2/Vachis';
import Vachis1 from './mainpage/Project/Project2/Vachis1';
import Vachis2 from './mainpage/Project/Project2/Vachis2';
import Vachis3 from './mainpage/Project/Project2/Vachis3';
import Vachismini from './mainpage/Project/Project2/Vachismini';


import West from './mainpage/Project/Project5/West';
import West1 from './mainpage/Project/Project5/West1';
import West2 from './mainpage/Project/Project5/West2';
import West3 from './mainpage/Project/Project5/West3';
import Westmini from './mainpage/Project/Project5/Westmini';

import Pro from './mainpage/Project/Project6/Pro';
import Pro1 from './mainpage/Project/Project6/Pro1';
import Pro2 from './mainpage/Project/Project6/Pro2';
import Pro3 from './mainpage/Project/Project6/Pro3';
import Promini from './mainpage/Project/Project6/Promini';

import Bookh from './mainpage/Project/Project3/Bookh';
import Bookh1 from './mainpage/Project/Project3/Bookh1';
import Bookh2 from './mainpage/Project/Project3/Bookh2';
import Bookh3 from './mainpage/Project/Project3/Bookh3';
import Bookhmini from './mainpage/Project/Project3/Bookhmini';


export const Pages = () => {
  return (
   <>

<BrowserRouter>
<Routes>

    <Route path='/' element={<Frontpage/>}></Route>
    {/* <Route path='/aboutus' element={<Aboutus/>}></Route> */}

     <Route path='/work' element={<Work/>}></Route>

     <Route path='/projects1' element={<Projects/>}></Route>

    <Route path='/indulasa' element={<Indulasa/>}></Route>
    <Route path='/indulasa1' element={<Indulasa1/>}></Route>
    <Route path='/indulasa2' element={<Indulasa2/>}></Route>
    <Route path='/indulasa4' element={<Indulasa4/>}></Route>
    <Route path='/indulasamini' element={<Indulasamini/>}></Route>





    <Route path='/vachis' element={<Vachis/>}></Route>
    <Route path='/vachis1' element={<Vachis1/>}></Route>
    <Route path='/vachis2' element={<Vachis2/>}></Route>
    <Route path='/vachis3' element={<Vachis3/>}></Route>
    <Route path='/vachismini' element={<Vachismini/>}></Route>

    <Route path='/west' element={<West/>}></Route>
    <Route path='/west1' element={<West1/>}></Route>
    <Route path='/west2' element={<West2/>}></Route>
    <Route path='/west3' element={<West3/>}></Route>
    <Route path='/westmini' element={<Westmini/>}></Route>


   <Route path='/bookh' element={<Bookh/>} ></Route>
   <Route path='/bookh1' element={<Bookh1/>} ></Route>
   <Route path='/bookh2' element={<Bookh2/>} ></Route>
   <Route path='/bookh3' element={<Bookh3/>} ></Route>
   <Route path='/bookhmini' element={<Bookhmini/>} ></Route>



    <Route path='/pro' element={<Pro/>}></Route>
    <Route path='/pro1' element={<Pro1/>}></Route>
    <Route path='/pro2' element={<Pro2/>}></Route>
    <Route path='/pro3' element={<Pro3/>}></Route>
    <Route path='/promini' element={<Promini/>}></Route>



</Routes>
</BrowserRouter>
   </>
  )
}
