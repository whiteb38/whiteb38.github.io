"use strict";

import React from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import Experience from "./Experience";
import Projects from "./Projects";
import Practice from "./Practice";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/global.css";
var Scroll = require("react-scroll");

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <footer />;
  }
}
export default Header;
