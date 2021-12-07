import React from "react";
import "./intro.css";
function Intro() {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">HI, OUR NAME IS</h2>
            <h1 className="i-name">RICK AND MORTY</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">PhotoGrapher</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Content Creater</div>
              </div>
            </div>
            <div className="i-desc">
              I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online
              stores.
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg gradient_bgb"></div>
          <img className="i-img" src="./p10376284_i_v8_aa.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Intro;
