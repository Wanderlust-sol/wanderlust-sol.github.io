import React, { Component } from "react";
import SelfIntro from "./SelfIntro";
import "../pages/Intro.scss";
import "./Main.scss";
import example1 from "../img/example1.jpg";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move: false
    };
  }
  handleClick = e => {
    if (!this.state.move) {
      this.setState({ move: true });
    } else {
      this.setState({ move: false });
    }
  };

  render() {
    const move = this.state.move;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return (
      <div>
        <div
          className="bg"
          onClick={this.handleClick}
          // style={{ backgroundColor: this.props.menumode && "#b2dffb" }}
        >
          <div className={move ? "covering" : "cover"}>
            {this.state.move && <SelfIntro />}
          </div>
          <div className={move ? "moving-hello" : "hello"}>
            <div className="hello-he">WEL</div>
            <div>
              COME<span style={{ color: "#b2dffb" }}>.</span>
            </div>
          </div>
        </div>
        <div
          className={move ? "" : "main-bottom"}
          style={{ display: this.props.menumode && "none" }}
        >
          <img src={example1} width="100%" />
        </div>
      </div>
    );
  }
}

export default Main;
