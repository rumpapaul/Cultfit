import React from 'react'
import { EasingPreset, useParallax } from 'react-scroll-parallax';
import {easeIn, easeInOut, motion , useScroll , useTransform} from 'framer-motion'
import './body.css'
import vdo from '../assets/video.mp4'
import cult from '../assets/cult.png'
import path from '../assets/Path.webp'
import vdoborder from '../assets/vdoborder.webp'
import elite from '../assets/elite.webp'
import pro from '../assets/pro.webp'
import home from '../assets/home.webp'
import img1 from '../assets/img 1.webp'
import img2 from '../assets/img 2.webp'
import img3 from '../assets/img 3.webp'
import img4 from '../assets/img 4.webp'
import img5 from '../assets/img 5.webp'
import img6 from '../assets/boxinglady.jpg'
import img7 from '../assets/gym rope.jpg'
import img8 from '../assets/zoomba.jpg'
import img9 from '../assets/icp_cb.webp'
import img10 from '../assets/icp_cg.webp'
import img11 from '../assets/icp_cl.webp'
import img12 from '../assets/yoga.jpg'
import img13 from '../assets/gym.jpg'
import img14 from '../assets/wing.png'
import img15 from '../assets/arrow.webp'
import img16 from '../assets/appstore.webp'
import img17 from '../assets/googleplay.webp'
import img18 from '../assets/career.webp'


import { useRef } from 'react';
export default function Body() {
  // let {scrollYProgress}=useScroll()
  // let scale=useTransform(scrollYProgress , [0,1] ,['100%' ,'0%'])
  // let {scrollY}=useScroll()
  // let y=useTransform(scrollY , [0,1] ,['0%' ,'1%'])
  const para0 = useParallax({
    
   translateY: [0 , -100],
  

  });
  // const para01 = useParallax({
    
  //  translateY: [0 , -500],
   

  // });
  const para1 = useParallax({
    
    scale: [1, 0, "easeInOutQuad"],
   

  });
  const para2 = useParallax({
    
    scale: [1, 0, "easeInOutQuad"],
    
  });
  const para8 = useParallax({
    
    scale: [1, 0, "easeInOutQuad"],
    
  });
  const para9 = useParallax({
    
    scale: [1, 0, "easeInOutQuad"],
    
  });
  const para10 = useParallax({
    
    scale: [1, 0, "easeInOutQuad"],
    
  });
  const para11 = useParallax({
    
    scaleX: [1, 0.8, "easeInOutQuad"],
    
  });
  const para12 = useParallax({
    
    scaleX: [1, 0.8, "easeInOutQuad"],
    
  });
  const para13 = useParallax({
    
    scaleX: [1, 0.8, "easeInOutQuad"],
    
  });
  const para14 = useParallax({
    
    scaleX: [1, 0.8, "easeInOutQuad"],
    
  });
  const para15 = useParallax({
    
    scaleX: [1, 0.8, "easeInOutQuad"],
    
  });
  const para16= useParallax({
    
    scaleX: [1, 0.8, "easeInOutQuad"],
    
  });
  const para17= useParallax({
    
    scaleX: [1, 0.8, "easeInOutQuad"],
    
  });
  const para18 = useParallax({
    
    scaleX: [1, 0.8, "easeInOutQuad"],
    
  });
  const para19 = useParallax({
    
    scaleX: [1, 0.5, "easeInOutQuad"],
    
  });
  const para20 = useParallax({
    
    scaleX: [1, 0.5, "easeInOutQuad"],
    
  });
  const para21 = useParallax({
    
   translateY: [0, -90],
    
  });
  
  const para4 = useParallax({
    easing:"easeInOutQuad",
    opacity:[1, 0],
    
    
  });
  const para5 = useParallax({
    easing:"easeInOutQuad",
    opacity:[1, 0  ]
    
  });
  
  const para7 = useParallax({
    easing:"easeInOutQuad",
    opacity:[1, 0 ]
    
  });
  return (
    <div className='body'>
   <div className="vdo"> <video src={vdo} autoPlay loop muted ></video>
   </div><img src={vdoborder} className="vdobrd" alt="br" />
    <div className="first-anima">
    <div className="first-ani"> <img src={cult} alt="we are cult" /></div> 
      <div className="sec-ani">
      <p>A fitness movement that is worth  </p >
       <p> breaking a sweat for</p>
      <a href=""> <div className="explore">
        EXPLORE CULTPLUS
       </div></a>
       <img src={path} className='path' alt="" /></div>
    </div>
   
    <div className="cultplus-item">
<div className="elite">
<p>cultplus</p>
<img src={elite} alt="" />
<div className='elite-desc'>
 
 <p> Unlimited access to</p> 
 <p> group classes, all gyms </p>
<p> and at home workouts </p>
</div>
</div>
<div className="elite">
<p>cultplus</p>
<img src={pro} alt="" />
<div className='elite-desc'>
 
 <p> Unlimited access to all</p> 
 <p><b>PRO</b> gyms and at-home </p>
<p> workouts </p>
</div>
</div>
<div className="elite">
<p>cultplus</p>
<img src={home} alt="" />
<div className='elite-desc'>
 
 <p> Unlimited access to at-</p> 
 <p> home workouts with </p>
<p> calorie tracking </p>
</div>
</div>
    </div>
   
    <div  className="cont1" ref={para0.ref}>
      <div className="img1">
        <img ref={para1.ref} src={img1} alt="" />
      </div>
      <div className="img2">
        <img src={img2} ref={para2.ref} alt="" />
      </div>
    </div>
    <div className="count2" >
      <div className="img3 img">
        <img src={img3} ref={para8.ref} alt="" />
      </div>
      <div className="img4 img">
        <img src={img4} ref={para9.ref} alt="" />
      </div>
      <div className="img5 img">
        <img src={img5} ref={para10.ref}  alt="" />
      </div>
    </div>
    <div className="count03">
    <div className="count3" ref={para19.ref} >
      <div className="img6 img">
        <img src={img6} ref={para11.ref}  alt="" />
      </div>
      <div className="img7 img" >
        <img src={img7}  alt=""ref={para12.ref} />
      </div>
      <div className="img8 img" >
        <img src={img7}   alt=""ref={para13.ref} />
      </div>
      <div className="img9 img">
        <img src={img8}   alt=""ref={para14.ref} />
      </div>
    </div>
    <div className="count3 count003" ref={para20.ref}>
      <div className="img10 img">
        <img src={img3} className="imglmn" alt=""ref={para15.ref} />
      </div>
      <div className="img11 img">
        <img src={img10}  alt=""ref={para16.ref} />
      </div>
      <div className="img12 img">
        <img src={img12}   alt=""ref={para17.ref} />
      </div>
      <div className="img13 img">
        <img src={img13}   alt="" ref={para18.ref}/>
      </div>
    </div></div>
    <div className="count4" ref={para21.ref}>
      <p className='p1'>cultplus</p>
      <a href=""><p className='lrnm'>LEARN MORE</p></a>
      <div className="count-img1">
        <div className="gym-1 gym">
          <img src={img9} alt="" />
          <div className="gym-desc1">
            <p>Unlimited access to</p>
            <li>At-center group classes</li>
            <li>All ELITE & PRO gyms</li>
            <li>At-home live workouts</li>
          </div>
        </div>
        <div className="gym-2 gym">
        <img src={img10} alt="" />
          <div className="gym-desc1">
            <p>Unlimited access to</p>
            <li>At-center group classes</li>
            <li>All ELITE & PRO gyms</li>
            <li>At-home live workouts</li>
          </div>
        </div>
        <div className="gym-3 gym" >
        <img src={img11} alt="" />
          <div className="gym-desc1">
            <p>Unlimited access to</p>
            <li>At-center group classes</li>
            <li>All ELITE & PRO gyms</li>
            <li>At-home live workouts</li>
          </div>
        </div></div>
        <div className="try">
          <div className="try1">
<div className="t1">
  TRY FOR FREE
</div>
<div className="t2">
  LEARN MORE
</div>
          </div>
          <div className="try1">
<div className="t1">
  TRY FOR FREE
</div>
<div className="t2">
  LEARN MORE
</div>
          </div>
          <div className="try1">
<div className="t1">
  TRY FOR FREE
</div>
<div className="t2">
  LEARN MORE
</div>
          
        </div>

      </div>
<div className="count5">
<div className="count05">
  <div className='b1'>
   <p className='b1p1'>cult transform</p> 
   <p>Get Coached To Lose Weight For Good</p>
  </div>
<div className="b2">
  <img src={img15} alt="" />
</div>
</div>
<div className="count05 cnt5">
<div className='b1'>
   <p className='b1p1'>cult transform</p> 
   <p>Get Coached To Lose Weight For Good</p>
  </div>
<div className="b2">
  <img src={img15} alt="" />
</div>
</div>
</div>
<div className="count6">
<div className="count05 cnt06">
<div className='b1'>
   <p className='b1p1'>cult transform</p> 
   <p>Get Coached To Lose Weight For Good</p>
  </div>
<div className="b2">
  <img src={img15} alt="" />
</div>
</div>
<div className="count05 cnt6">
<div className='b1'>
   <p className='b1p1'>cult transform</p> 
   <p>Get Coached To Lose Weight For Good</p>
  </div>
<div className="b2">
  <img src={img15} alt="" />
</div>
</div>

</div>
<div className="count7">

<p className='c7p1'>
Download the most loved fitness app
</p>
<p className='c7p2'>
Start your fitness journey with us. Join the cult!
</p>
 
  <div className="c7img">
<img src={img16} alt="" />
<img src={img17} alt="" />
  </div>
</div>
<div className="para">
Join the cult family
</div>
<div className="count8">
  <div className="c8b1">
    <p className='c8p1'>
      Careers at Cult
    </p>
    <img src={img18} alt="" />
    <a href=""><p className='lrnm'>LEARN MORE</p></a>
  </div>
  <div className="c8b1 c8b2">
<p className='stp1'>
  cult.fit franchise
</p>
<p className='stp1 stp2'>oppurtunities</p>
<p className='stp3'>Partner with the largest fitness brand in india</p>
<a href=""><p className='lrnm'>LEARN MORE</p></a>
  </div>
 
</div> <div className="count9">
    <p>
    At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.
#BeBetterEveryDay
    </p>
  </div>
    </div>
    <div className="textbox1" >
<p className='txt-p-1' ref={para4.ref}>cultplus</p>
<p className='txt-p-2' ref={para5.ref}>One membership for all <br /> your fitness needs</p>
    </div>
    <div className="textbox2" >

<p className='txt-p-2' ref={para7.ref}>Fun, trainer led group <br /> classes</p>
    </div>

   <div   className="wings"><img src={img14} alt="" /></div>
   <div className="wing "><img src={img14} alt="" /></div>

    </div>
  )
}
