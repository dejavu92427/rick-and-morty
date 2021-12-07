import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <div className="about-card">
            <div className="about-bg gradient_bgb"></div>
            <img className="about-img" src="./thumb-1920-909641.png" alt="" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-right-section1">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">It is a long established fact that a reader will be distracted by the readable content.</p>
            <p className="a-desc">
              The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children
              Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside
              of Seattle, Washington.
            </p>
          </div>
          <div className="about-right-section2">
            <img className="about-img2" src="470659.png" alt="" />
            <div className="about-right-section2-text">
              <h4 className="a-sub">Philosophy</h4>
              <p className="a-desc">Nobody exists on purpose, nobody belongs anywhere, everybody's gonna die. Come watch TV. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
