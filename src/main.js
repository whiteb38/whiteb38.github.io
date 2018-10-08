import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomeView from "./HomeView";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import lyricsApp from "./reducers";

const store = createStore(lyricsApp, applyMiddleware(thunk));

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Provider store={store}>
      <HomeView />
    </Provider>,
    document.getElementById("mount")
  );
});
