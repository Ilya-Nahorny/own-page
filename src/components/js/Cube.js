import React from "react";
import js from "../sources/js.png"
import css from "../sources/css.png"
import html from "../sources/html.png"
import git from "../sources/git.png"
import react from "../sources/react.png"
import sass from "../sources/sass.png"


const Cube = () => {
  React.useEffect(() => {
    let rotateY = 0;
    let  rotateX = 0;
    let cube = document.querySelector('.cube');
  function rotateCube(){
    rotateX += 0.2 ;
    rotateY += 0.2  ;
      cube.style.transform = 'rotateX(' + rotateX + 'deg)';
      cube.style.transform += 'rotateY(' + rotateY + 'deg)';
      requestAnimationFrame(rotateCube)}
      rotateCube()
  }, []);


  return(
    <div className="container" >
      <div className="cube">
          <div className="side front"><img src={js} alt="html5"></img></div>
          <div className="side back"><img src={css} alt="css"></img></div>
          <div className="side right"><img src={html} alt="js"></img></div>
          <div className="side left"><img src={git} alt="git"></img></div>
          <div className="side top"><img src={react} alt="react"></img></div>
          <div className="side bottom"><img src={sass} alt="sass"></img></div>
      </div>
    </div>
);
}

export default Cube;

/* class Cube extends React.Component {
    componentDidMount () {
        let rotateY = 0;
        let  rotateX = 0;
        let cube = document.querySelector('.cube');
      function rotateCube(){
        rotateX += 0.2 ;
        rotateY += 0.2  ;
          cube.style.transform = 'rotateX(' + rotateX + 'deg)';
          cube.style.transform += 'rotateY(' + rotateY + 'deg)';
      requestAnimationFrame(rotateCube)
      }
      rotateCube()
    }
  render() {
   return (
        <div className="container animate__animated animate__zoomIn">
            <div className="cube">
                <div className="side front"><img src={js} alt="html5"></img></div>
                <div className="side back"><img src={css} alt="css"></img></div>
                <div className="side right"><img src={html} alt="js"></img></div>
                <div className="side left"><img src={git} alt="git"></img></div>
                <div className="side top"><img src={react} alt="react"></img></div>
                <div className="side bottom"><img src={sass} alt="sass"></img></div>
            </div>
        </div>
    );
  }
}

export default Cube; */
