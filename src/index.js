import React from "react";
import ReactDOM from "react-dom";
import Routes from "Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "Redux/rootReducer";
import { ParallaxProvider } from "react-scroll-parallax";
import "index.scss";
import "styles/reset.scss";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <ParallaxProvider>
      <Routes />
    </ParallaxProvider>
  </Provider>,
  document.getElementById("root")
);
