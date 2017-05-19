import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state= {
    };
  }
  render(){
    return(
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Brendons Page</a>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Project 1</a>
                </li>
                <li>
                  <a href="#">Project 2</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="www.github.com/whiteb38">Github</a>
                </li>
                <li>
                  <a href="www.linkedIn.com">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}
export default Header;
