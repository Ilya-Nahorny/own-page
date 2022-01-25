import React from "react";
// import styled from "styled-components";  
import "../scss/import.scss";
// import CanvasAnimate from "./canvas";

/* const TextWrapper = styled.div`
font-size: 40px;
font-family: monospace;
white-space: nowrap;
overflow: hidden;
border-right: 4px solid orange;
animation: flashing 0.75 step-end infinite;

@keyframes flashing{
  0%{
    border-color: orange;
  }
  50%{
    border-color: transparent;
  }
  100%{
    border-color: orange;
  }
}
` */




const Home = (props) => {
/* console.log(props.label)
  React.useEffect(() => {
    // CanvasAnimate();
  }, []); */



  return (
    <div className="home" >
{/*       <div className="animateBckg">
        <canvas id="canvas"></canvas>
      </div> */}
      <div className="home_context">
        <h1 className="title">{props.homePageH1}</h1>
        <p className="home_context_sub"><i>&lsaquo;h5&rsaquo;</i> <span> Frontend Developer </span>
          <i>&lsaquo;/h5&rsaquo;</i></p>
      </div >

    </div>
  );
};

export default Home;
