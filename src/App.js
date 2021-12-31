import './App.css';
import Boxcomponent from './Boxcomponent';
import React, {useRef, useEffect, useState} from 'react';

function App() {
  const numbers = ['4','1','2','3','4','1'];
  // const [index, setIndex] = useState(1);
  let index = 1

  let mouseClick = false;

  const sliderRef = useRef();


  const prevHandler = () => {
    mouseClick = false;
    sliderRef.current.removeEventListener('transitionend', MoveFunc);
    if(index === 1)  {
      sliderRef.current.addEventListener('transitionend', MoveFunc);
      console.log('end')
    }
    else if(index !== 1) {
      sliderRef.current.style.transition = `0.1s`;
    }
    index -= 1;
    sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index)}px, 0, 0)`;
    
  }

  // const nextMoveFunc = () => {
  //   sliderRef.current.style.transition = `0ms`;
  //   index = 0;
  //   sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index)}px, 0, 0)`;
  //   console.log('complete')

  // }

  const MoveFunc = (e) => {
    sliderRef.current.style.transition='0ms';
    index = !mouseClick? 4:0;
    console.log(e.target.className);
    sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index)}px, 0, 0)`;
  }

  // const prevMoveFunc = () => {
  //   sliderRef.current.style.transition='0ms';
  //   index = 4;
  //   sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index)}px, 0, 0)`;
  // }

  const nextHandler = () => {
    mouseClick = true;
    sliderRef.current.removeEventListener('transitionend', MoveFunc);
    if(index=== 3) {
      sliderRef.current.addEventListener('transitionend', MoveFunc);
    }
    else if(index !== 3) {
      sliderRef.current.style.transition = `0.1s`;
    }
    index += 1;
    
    sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index)}px, 0, 0)`;
    

  }

  return (
   <div className='section'>
     <button className = 'prev-btn' onClick={prevHandler}> prev </button>
     <button className = 'next-btn' onClick={nextHandler}> next </button>
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