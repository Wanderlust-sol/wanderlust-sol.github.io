import React from "react";
import { connect } from "react-redux";
import { coverMode, homeMode } from "Redux/Actions";
import { Parallax } from "react-scroll-parallax";
import SelfIntro from "./SelfIntro";
import MainBottom from "./MainBottom";
import "./Main.scss";
// import { portfolioData } from "dummy/portfolioData";
import { IoIosArrowRoundDown } from "react-icons/io";
import example1 from "img/example1.jpg";
import myfaketrip_img from "img/myfaketrip_img.png";
import vibe_img from "img/hi-vibe_img.png";

const Main = props => {
  const { menu, hover, mode, coverMode, homeMode } = props;

  const handleClick = () => {
    mode.mode === "home" ? coverMode() : homeMode();
  };

  return (
    <>
      <div
        className="bg"
        onClick={handleClick}
        // style={{
        //   backgroundColor: menu.menu && "#b2dffb",
        //   transition: !menu.menu && "backgroundColor ease"
        // }}
      >
        <Parallax className="custom-class" y={[-50, 50]}>
          <div className={mode.mode === "cover" ? "covering" : "cover"}>
            {mode.mode === "cover" && <SelfIntro />}
          </div>
          <div className={mode.mode === "cover" ? "moving-hello" : "hello"}>
            <div className="hello-he">WEL</div>
            <div>
              COME<span style={{ color: "#b2dffb" }}>.</span>
            </div>
          </div>
        </Parallax>
        {mode.mode === "cover" && !hover.hover && !menu.menu && (
          <span className="scroll-arrow">Scroll</span>
        )}
        {mode.mode === "cover" && !hover.hover && !menu.menu && (
          <IoIosArrowRoundDown className="arrow-icon" />
        )}
      </div>
      <Parallax className="custom-class" y={[0, 0]}>
        <div
          className={
            mode.mode === "cover"
              ? "main-bottom-visible"
              : "main-bottom-invisible"
          }
          style={{ display: mode.mode === "home" && "none" }}
        >
          <img src={example1} width="100%" alt="example" />
        </div>
      </Parallax>
      {mode.mode === "cover" && <MainBottom />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.mode,
    menu: state.menu,
    hover: state.menuHover
  };
};

export default connect(mapStateToProps, { coverMode, homeMode })(Main);
