import './App.css';
import Boxcomponent from './Boxcomponent';
import React, {useRef, useEffect, useState} from 'react';

function App() {
  const numbers = ['1','2','3','4'];
  // const [index, setIndex] = useState(1);
  const index = useRef(0);

  const sliderRef = useRef();


  const prevHandler = () => {
    if(index.current === 0) return;
    index.current -= 1;
    sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index.current)}px, 0, 0)`;
    
    
  }

  const nextHandler = () => {
    if(index.current === 3) return;
    index.current += 1;
    sliderRef.current.style.transform = `translate3d(${-500 * parseInt(index.current)}px, 0, 0)`;
    

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
