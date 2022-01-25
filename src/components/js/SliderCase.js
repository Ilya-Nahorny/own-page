import React, { Component, createRef } from "react";
import Slider from "react-slick";
import certFE from "../sources/feCert.png";
import certJS from "../sources/jsCert.jpg";
import vid1 from "../sources/go-surf.mp4";
import vid2 from "../sources/belcop.mp4";
import vid3 from "../sources/layout.mp4";
import vid4 from "../sources/texode.mp4";
export default class SimpleSlider extends Component {


  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const video = [
      vid1,vid2,vid3,vid4
    ]
      

    return (
      <div className="slider-case">
        <Slider {...settings}>
          <div className="slide">
            <h3 className="title">{this.props.case.certificates.title}</h3>
            <div className="certificates">
              <div className="cert cert-FE">
                <img src={certFE}></img>
                <p>
                  {this.props.case.certificates.descrFE}
                  <br />
                  <span>
                    {this.props.case.certificates.school}
                    <br />
                    (04.2019 - 7.2019)
                  </span>
                </p>
              </div>
              <div className="cert cert-JS">
                <img src={certJS}></img>
                <p>
                  {this.props.case.certificates.descrJS}
                  <br />
                  <span>
                    {this.props.case.certificates.school}
                    <br />
                    (08.2019 - 11.2019)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <h3 className="title">{this.props.case.exp.title}</h3>
            <div className="examples">
              {video.map((arr, ind) =>{
                return(<div className="card">
                  <video src={video[ind]} width={500} height={300} muted autoPlay loop></video>
                </div>)
              })}
            </div>
          </div>
          <div className="slide">
            <h3>pet</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
