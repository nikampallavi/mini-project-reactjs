// import React, { useEffect, useState } from "react";
// import SliderContent from "./SliderContent";
// import SilderImages from "./SilderImages";
// import Arrows from "./Arrows";

// const len=SilderImages.length-1;

// function Slider(props)
// {
//     const[activeIndex,setActiveIndex]=useState(0);
//     useEffect(()=>{
//         const interval=setInterval(()=>{
//             setActiveIndex(activeIndex===len?0:activeIndex+1);
//         },5000);
//         return()=>clearInterval(interval);
//     },[activeIndex]);

//    return(
//     <div className="slider-container">
//         <SliderContent activeIndex={activeIndex} sliderImage={SilderImages}/>
//         <Arrows
//             prevSlide={()=>
//                 setActiveIndex(activeIndex < 1 ? len : activeIndex-1)
//             }
//             nextslide={()=>
//                 setActiveIndex(activeIndex === len ? 0 : activeIndex+1)
//             }
        
        
//         />
//     </div>
//  );
// }

// export default Slider;