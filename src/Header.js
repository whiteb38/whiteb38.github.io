'use strict';

import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/global.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      scrollClass: 'navbar opaque-navbar navbar-fixed-top hidden-xs',
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
      this.setState({scrollClass: 'navbar opaque-navbar opaque navbar-fixed-top hidden-xs'});
    }
    else if(pageY >= 1000){
      this.setState({scrollClass: 'navbar opaque-navbar torquoise navbar-fixed-top hidden-xs'});
    }
    else{
      console.log("at top");
      this.setState({scrollClass: 'navbar opaque-navbar navbar-fixed-top hidden-xs'});
    }
  }
  render(){
    let {scrollClass} = this.state;
    return(

          <nav className={scrollClass} id='nav'>

                <a className="navbar-brand">
                    <img className="d-inline-block align-top"src="../extra/bw_logo.png" style={{width:"100px", height:"80px"}}>
                    </img>
                  </a>
                  <div className="collapse navbar-collapse " >
                    <ul className="navbar-nav hidden-xs">
                      <li className="navbar-item" style={{paddingLeft:"20px"}}><a href="#">Experience</a></li>
                      <li className="navbar-item"><a href="#">Projects</a></li>
                      <li className="navbar-item"><a href="#">Frameworks</a></li>
                      <li className="navbar-item">
                        <a  href="https://www.github.com/whiteb38" target="_blank">
                          <img src="../extra/Webp.net-resizeimage.png" style={{width:"100px", height:"40px", marginTop:"-10px"}} />
                        </a>
                      </li>
                      <li className="navbar-item">
                        <a  href="https://www.linkedin.com/in/brendon-white-55896b58/" target="_blank">
                          <img src="../extra/Logo-2C-21px-TM.png" style={{width:"100px", height:"20px", marginTop:"-5px"}} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="visible-xs hidden-sm hidden-md hidden-lg hidden-xl" style={{marginLeft:"150px", marginTop:"-20px"}}>
                    <DropdownButton  title="Menu" id="Menu" style={{height:"50px", backgroundColor: "white"}}>
                      <MenuItem id="menuItem" href="/Experience">Experience</MenuItem>
                      <MenuItem id="menuItem" href="/Projects">Projects</MenuItem>
                      <MenuItem id="menuItem" href="/Frameworks">Frameworks</MenuItem>
                      <MenuItem divider />
                      <MenuItem id="menuItem" href="https://www.github.com/whiteb38">Github</MenuItem>
                      <MenuItem id="menuItem" href="https://www.linkedin.com/in/brendon-white-55896b58/">LinkedIn</MenuItem>
                    </DropdownButton>
                  </div>

          </nav>
    );
  }
}
export default Header;
