"use strict";

import React from "react";
import Scroll from "react-scroll";

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
    let { scrollClass } = this.state;
    return (
      <nav className="navbar navbar-expand-lg opaque-navbar opaque" id="nav">
        <div className="header_logo">
          <a className="navbar-brand header_logo_link">
            <img
              onClick={this.handleClickTop}
              className="d-inline-block align-top"
              src="../extra/bw_logo_white-crop.png"
              style={{ width: "100px", cursor: "pointer" }}
            />
          </a>
        </div>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link customNav"
              onClick={this.props.scrollToExperience}
            >
              Experience
            </a>
            <a
              className="nav-item nav-link customNav"
              onClick={this.props.scrollToProjects}
            >
              Projects
            </a>
            <a
              className="nav-item nav-link customNav"
              onClick={this.props.scrollToFrameworks}
            >
              Frameworks
            </a>
          </div>
          {/* <ul
            className="navbar-nav hidden-sm"
            style={{ float: "right", paddingRight: "70px" }}
          >
            <li className="navbar-item ">
              <a href="https://www.github.com/whiteb38" target="_blank">
                <img
                  id="about"
                  src="../extra/github_icon.png"
                  style={{ width: "45px", height: "auto", marginTop: "-13px" }}
                />
              </a>
            </li>
            <li className="navbar-item ">
            <a
                href="https://www.linkedin.com/in/brendon-white-55896b58/"
                target="_blank"
              >
                <img
                  id="about"
                  src="../extra/linkedIn_icon.png"
                  style={{ width: "45px", height: "auto", marginTop: "-13px" }}
                />
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}
export default Header;
