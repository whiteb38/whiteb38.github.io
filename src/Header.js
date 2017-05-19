import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state= {
    };
  }
  render(){
      var headerStyle = {color: "#333", fontVariant: "small-caps"}
    return(

          <nav className="navbar navbar-default navbar-static-top" style={{height: "60px", borderRadius: "50px", borderWidth: "2px"}}>
            <div className="container">
              <div className="navbar-header" style={{paddingTop: "5px"}}>
                <a className="navbar-brand" href="#" style={headerStyle}>Brendons White</a>
              </div>
              <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav" style={{paddingTop: "5px"}}>
                  <li >
                    <a href="#" style={headerStyle}>Project 1</a>
                  </li>
                  <li>
                    <a href="#" style={headerStyle}>Project 2</a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right" style={{paddingTop: "5px"}}>
                  <li>
                    <a href="https://www.github.com/whiteb38" style={headerStyle}>Github</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/brendon-white-55896b58/" style={headerStyle}>LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
  }
}
export default Header;
