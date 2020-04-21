import React from "react";
import "pages/Intro.scss";
import "./SelfIntro.scss";

const SelfIntro = () => {
  return (
    <div className="selfbox">
      <div className="name">
        TAESOL KWON
        <div className="fadingEffect1"></div>
      </div>
      <div className="job">
        Front-end Developer | Photographer
        <div className="fadingEffect2"></div>
      </div>
      <div className="introduction">
        Who Loves Creating Cool Interface and Animation
        <div className="fadingEffect3"></div>
      </div>
    </div>
  );
};

export default SelfIntro;
