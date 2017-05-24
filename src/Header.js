'use strict';

import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/global.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      scrollClass: 'navbar opaque-navbar navbar-fixed-top',
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
       window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
    }
  handleScroll(e){
    var pageY = window.scrollY;
    console.log(pageY)
    if (pageY > 100 && pageY < 1000){
      this.setState({scrollClass: 'navbar opaque-navbar opaque navbar-fixed-top'});
    }
    else if(pageY >= 1000 && pageY < 2400){

      this.setState({scrollClass: 'navbar opaque-navbar red navbar-fixed-top'});
    }
    else if(pageY >= 2400){

      this.setState({scrollClass: 'navbar opaque-navbar green navbar-fixed-top'});
    }
    else{
      console.log("at top");
      this.setState({scrollClass: 'navbar opaque-navbar navbar-fixed-top'});
    }
  }
  render(){
    let {scrollClass} = this.state;
    return(
          <nav className={scrollClass} id='nav'  >

                <a className="navbar-brand" >
                    <img className="d-inline-block align-top"src="../extra/bw_logo_clip.png" style={{width:"100px", height:"80px"}}>
                    </img>
                  </a>
                  <div className="collapse navbar-collapse " >
                    <ul className="navbar-nav hidden-xs">
                      <li className="navbar-item" style={{paddingLeft:""}}><a href="#">Experience</a></li>
                      <li className="navbar-item"><a href="#">Projects</a></li>
                      <li className="navbar-item"><a href="#">Frameworks</a></li>
                      <li className="navbar-item hidden-md hidden-sm hidden-xs">
                        <a  href="https://www.github.com/whiteb38" target="_blank">
                          <img src="../extra/Webp.net-resizeimage.png" style={{width:"100px", height:"40px", marginTop:"-10px"}} />
                        </a>
                      </li>
                      <li className="navbar-item hidden-md hidden-sm hidden-xs">
                        <a  href="https://www.linkedin.com/in/brendon-white-55896b58/" target="_blank">
                          <img src="../extra/Logo-2C-21px-TM.png" style={{width:"100px", height:"20px", marginTop:"-5px"}} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="visible-xs visible-sm visible-md hidden-lg hidden-xl" style={{marginLeft:"770px",marginTop:"-35px"}}>
                    <DropdownButton  title="Menu" id="Menu" style={{height:"50px", backgroundColor: "white"}}>
                      <MenuItem id="menuItem" href="https://www.github.com/whiteb38">Github</MenuItem>
                      <MenuItem id="menuItem" href="https://www.linkedin.com/in/brendon-white-55896b58/">LinkedIn</MenuItem>
                    </DropdownButton>
                  </div>

          </nav>
    );
  }
}
export default Header;
