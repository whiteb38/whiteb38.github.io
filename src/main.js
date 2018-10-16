import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom";
import HomeView from "./components/HomeView";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import app from "./reducers";

const store = createStore(app, applyMiddleware(thunk));

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Provider store={store}>
      <HomeView />
    </Provider>,
    document.getElementById("mount")
  );
});
