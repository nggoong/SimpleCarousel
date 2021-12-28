import './App.css';
import Boxcomponent from './Boxcomponent';
import React, {useRef, useEffect, useState} from 'react';

function App() {
  const numbers = ['1','2','3','4','1'];
  // const [index, setIndex] = useState(1);
  let index = 0

  const sliderRef = useRef();


  const prevHandler = () => {
    if(index === 0) return;
    index -= 1;
    sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index)}px, 0, 0)`;
    
    
  }
  const tempFunc = () => {
    sliderRef.current.style.transition = `0ms`;
    index = 0;
    sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index)}px, 0, 0)`;
    console.log('complete')

  }

  const nextHandler = () => {
    sliderRef.current.removeEventListener('transitionend', tempFunc);
    if(index=== 3) {
      sliderRef.current.addEventListener('transitionend', tempFunc);
    }
    else if(index !== 3) {
      sliderRef.current.style.transition = `0.1s`;
    }
    index += 1;
    
    sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index)}px, 0, 0)`;
    

  }

  return (
   <div className='section'>
     <button onClick={prevHandler}> prev </button>
     <button onClick={nextHandler}> next </button>
     <div className='carousel-container'>
       <div className='carousel-viewer'>
         <div className='carousel-slider' ref={sliderRef}>
         {numbers.map((number, index)=> {return(<Boxcomponent key={index} value={number}></Boxcomponent>)})}
         </div>
       </div>
     </div>
     
   </div>
  );
}

export default App;