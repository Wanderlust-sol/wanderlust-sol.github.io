import React, { useState } from "react";
import { connect } from "react-redux";
import { closeMenu } from "Redux/Actions";
import "pages/Intro.scss";
import "./Header.scss";
import "./Menu.scss";
import { MdClose } from "react-icons/md";

const Menu = props => {
  const { menu, closeMenu } = props;
  const [close, setClose] = useState(false);

  const closeBtn = () => {
    setClose(true);
    setTimeout(() => {
      closeMenu();
      setClose(false);
    }, 1000);
  };

  let menuCloseStyle;
  if (close) {
    menuCloseStyle = { width: "0%", transition: "1s ease" };
  }
  return (
    <div>
      <div
        className={menu.menu ? "menu-bg" : "menu-hidden"}
        style={menuCloseStyle}
      >
        <div className="close-icon">
          <MdClose onClick={closeBtn} />
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
            <p>
              <a href="https://velog.io/@taylorkwon92" target="blank">
                velog.io/@taylorkwon92
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

export default connect(mapStateToProps, { closeMenu })(Menu);
