import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Menu from "./Menu";
import "../pages/Intro.scss";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover = e => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    let menuHoverStyle;
    if (this.state.hover) {
      menuHoverStyle = { width: "120px", transition: "1s ease" };
    } else {
      menuHoverStyle = { width: "55px", transition: "1s ease" };
    }

    return (
      <header>
        <div className="header-top">
          <Link className="nav-brand link-name" to="/">
            WANDERLUST_SOL
          </Link>
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
            onMouseOver={this.toggleHover}
            onMouseOut={this.toggleHover}
            onClick={this.props.menuClick}
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
          <div>
            {this.props.menumode && (
              <Menu
                headerClick={this.props.menuClick}
                menumodes={this.props.menumode}
              />
            )}
          </div>
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
  }
}

export default Header;
