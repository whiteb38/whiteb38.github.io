"use strict";

import React from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";
import Experience from "./Experience";
import Projects from "./Projects";
import Practice from "./Practice";
import Scroll from "react-scroll";

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollClass: "navbar opaque-navbar fixed-top"
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClickExp = this.handleClickExp.bind(this);
    this.handleClickProj = this.handleClickProj.bind(this);
    this.handleClickPrac = this.handleClickPrac.bind(this);
    this.handleClickTop = this.handleClickTop.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  scrollTo(pos) {
    scroll.scrollTo(pos, {
      duration: 1500,
      delay: 50,
      smooth: "easeInOutQuad"
    });
  }

  handleScroll(e) {
    var pageY = window.scrollY;
    console.log(pageY);
    if (pageY > 100 && pageY < 1000) {
      this.setState({ scrollClass: "navbar opaque-navbar opaque fixed-top" });
    } else if (pageY >= 1000 && pageY < 2400) {
      this.setState({ scrollClass: "navbar opaque-navbar red fixed-top" });
    } else if (pageY >= 2400) {
      this.setState({ scrollClass: "navbar opaque-navbar green fixed-top" });
    } else {
      console.log("at top");
      this.setState({ scrollClass: "navbar opaque-navbar fixed-top" });
    }
  }
  handleClickTop(e) {
    this.scrollTo(0);
  }
  handleClickExp(e) {
    this.scrollTo(390);
  }
  handleClickProj(e) {
    this.scrollTo(1453.86669921875);
  }
  handleClickPrac(e) {
    this.scrollTo(2500);
  }
  render() {
    let { scrollClass } = this.state;
    return (
      <nav className="navbar navbar-expand-lg opaque-navbar opaque" id="nav">
        <a className="navbar-brand">
          <img
            onClick={this.handleClickTop}
            className="d-inline-block align-top"
            src="../extra/bw_logo_white.png"
            style={{ width: "220px", height: "auto", cursor: "pointer" }}
          />
        </a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a
              className="nav-item nav-link customNav"
              href="#"
              onClick={this.handleClickExp}
            >
              Experience
            </a>
            <a
              className="nav-item nav-link customNav"
              href="#"
              onClick={this.handleClickProj}
            >
              Projects
            </a>
            <a
              className="nav-item nav-link customNav"
              href="#"
              onClick={this.handleClickPrac}
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
