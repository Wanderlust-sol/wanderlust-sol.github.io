import React, { Component } from "react";
import "../pages/Intro.scss";
import "./Header.scss";
import "./Menu.scss";
import { MdClose } from "react-icons/md";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { menuClose: false };
  }

  closeBtn = () => {
    this.setState({ menuClose: true });
  };

  render() {
    //console.dir(this.props);
    // console.log("menu:", this.props.menumodes);
    let menuCloseStyle;
    if (this.state.menuClose) {
      menuCloseStyle = { width: "0%", transition: "1s ease" };
    }
    return (
      <div>
        <div className="menu-bg" style={menuCloseStyle}>
          <div className="close-icon">
            <MdClose onClick={this.closeBtn} />
          </div>
          <div className="menus_list">
            <ul className="menus">
              <div className="mask_parent">
                <li className="menu_name1">WANDERLUST_SOL</li>
                <div className="menu_mask1"></div>
              </div>
              <div className="mask_parent">
                <li className="menu_name2">PROJECT.</li>
                <div className="menu_mask2"></div>
              </div>
              <div className="mask_parent">
                <li className="menu_name3">PHOTOGRAPHY.</li>
                <div className="menu_mask3"></div>
              </div>
            </ul>
            <div className="contacts">
              <p>Seoul, South Korea</p>
              <p>+82(0)1087882966</p>
              <p>taylorkwon92@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
