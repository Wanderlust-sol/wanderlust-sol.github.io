import React, { Component } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import "./Intro.scss";

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      menumode: false
    };
  }

  menuClick = e => {
    if (!this.state.menumode) {
      this.setState({ menumode: true });
    } else {
      this.setState({ menumode: false });
    }
  };

  render() {
    //console.log(this.state.menumode);
    return (
      <div>
        <div>
          <Header
            menuClick={this.menuClick}
            //onAnimationEnd={() => this.setState({ menumode: false })}
            menumode={this.state.menumode}
          />
        </div>
        <main>
          <Main menumode={this.state.menumode} />
        </main>
      </div>
    );
  }
}

export default Intro;
