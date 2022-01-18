import React from "react";
// import "../scss/home.scss";
// import "../scss/canvas.scss";
import CanvasAnimate from "./canvas";
const Home = () => {
  React.useEffect(() => {
    CanvasAnimate();
  }, []);
  return (
    <div className="home">
      <div className="animateBckg">
        <canvas id="canvas"></canvas>
      </div>
      <div className="home_context">
        <h1>hello HR</h1>
        {/* <h3>frontend developer</h3> */}
      </div >
    </div>
  );
};

export default Home;
