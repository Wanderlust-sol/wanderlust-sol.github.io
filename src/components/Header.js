import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { showBar, closeBar, showMenu } from "Redux/Actions";
import Menu from "./Menu";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "pages/Intro.scss";
import "./Header.scss";

const Header = props => {
  const { menu, hover, showBar, closeBar, showMenu } = props;

  const logoClick = () => {
    props.history.push("/");
  };

  let menuHoverStyle;
  if (hover.hover) {
    menuHoverStyle = { width: "120px", transition: "1s ease" };
  } else {
    menuHoverStyle = { width: "55px", transition: "1s ease" };
  }

  return (
    <header>
      <div className="header-top">
        <div className="nav-brand link-name" onClick={logoClick}>
          WANDERLUST_SOL
        </div>
        <ul className="nav-lang">
          <li>
            <Link className="link-name">KO.</Link>
          </li>
          <li>
            <Link className="nav-lang-en link-name">EN.</Link>
          </li>
        </ul>
      </div>
      <div className="header-left" style={menuHoverStyle}>
        <Link
          className="nav-toggle link-name"
          onMouseOver={() => showBar()}
          onMouseOut={() => closeBar()}
          onClick={() => showMenu()}
        >
          <div className="menubar">
            <div className="menubar1"></div>
            <div className="menubar2"></div>
            <div className="menubar3"></div>
          </div>
          <div className="menu-name">
            <span className="menu-name1">M</span>
            <span className="menu-name2">E</span>
            <span className="menu-name3">N</span>
            <span className="menu-name4">U</span>
          </div>
        </Link>
        {menu.menu && <Menu />}
      </div>
      <div className="header-right">
        <ul className="nav-social">
          <li className="nav-social1">
            <FaInstagram />
          </li>
          <li className="nav-social2">
            <FaYoutube />
          </li>
          <li className="nav-social3">
            <FaGithub />
          </li>
        </ul>
      </div>
      <div className="header-bottom"></div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    menu: state.menu,
    hover: state.menuHover
  };
};

export default connect(mapStateToProps, {
  showMenu,
  showBar,
  closeBar
})(withRouter(Header));
