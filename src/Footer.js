'use strict';

import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import Experience from './Experience';
import Projects from './Projects';
import Practice from './Practice';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/global.css';
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
    }
  }
  render(){

    return(
      <footer>
        <ul className="navbar-nav" style={{listStyle:"none", padding:"10px"}}>
          <li className="navbar-item " style={{paddingRight:"10px"}}>
            <a  href="https://www.github.com/whiteb38" target="_blank">
              <img id="about" src="../extra/github_icon.png" style={{width:"45px", height:"auto"}} />
            </a>
          </li>
          <li className="navbar-item ">
            <a  href="https://www.linkedin.com/in/brendon-white-55896b58/" target="_blank">
              <img id="about" src="../extra/linkedIn_icon.png" style={{width:"45px", height:"auto"}} />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
export default Header;
