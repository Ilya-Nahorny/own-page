import React from 'react';
import SimpleSlider from './SliderCase';



export default function Case(props) {
  // console.log(props)
  return <div className='Case'>
    <SimpleSlider {...props}/>
  </div>;
}
