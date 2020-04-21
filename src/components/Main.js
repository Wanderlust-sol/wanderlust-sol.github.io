import React from "react";
import { connect } from "react-redux";
import { coverMode, homeMode } from "Redux/Actions";
import SelfIntro from "./SelfIntro";
import "./Main.scss";
import { portfolioData } from "dummy/portfolioData";
import { IoIosArrowRoundDown } from "react-icons/io";
import example1 from "img/example1.jpg";
import myfaketrip_img from "img/myfaketrip_img.png";
import vibe_img from "img/hi-vibe_img.png";

const Main = props => {
  const { menu, hover, mode, coverMode, homeMode } = props;

  const handleClick = () => {
    if (mode.mode === "home") {
      coverMode();
    } else if (mode.mode === "cover") {
      homeMode();
    }
  };
  console.log(portfolioData);
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
        <div className={mode.mode === "cover" ? "covering" : "cover"}>
          {mode.mode === "cover" && <SelfIntro />}
        </div>
        <div className={mode.mode === "cover" ? "moving-hello" : "hello"}>
          <div className="hello-he">WEL</div>
          <div>
            COME<span style={{ color: "#b2dffb" }}>.</span>
          </div>
        </div>
        {mode.mode === "cover" && <span className="scroll-arrow">Scroll</span>}
        {mode.mode === "cover" && !hover.hover && !menu.menu && (
          <IoIosArrowRoundDown className="arrow-icon" />
        )}
      </div>
      <div
        className={mode.mode === "cover" ? "" : "main-bottom"}
        style={{ display: mode.mode === "home" && "none" }}
      >
        <img src={example1} width="100%" alt="example" />
        {/* {portfolioData.map((item, i) => (
          <div>
            <img src={item.src} key={item.id} alt={item.name} width="100%" />
          </div>
        ))} */}
        <div className="portfolio">
          <div className="ex1 ex">
            <img src={myfaketrip_img} />
          </div>
          <div className="ex2 ex">
            <img src={vibe_img} />
          </div>
        </div>
      </div>
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
