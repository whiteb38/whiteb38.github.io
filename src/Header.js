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

          <nav className="navbar navbar-default" style={{height: "60px", borderRadius: "50px", borderWidth: "2px", margin:"0px auto"}}>
            <div className="nav navbar-nav navbar-left">
              <ul className="nav navbar-nav navbar-left" style={{paddingTop: "2px"}}>
                <li>
                  <a className="nav navbar-nav navbar-left" style={{backgroundImage:"url(../extra/bw_logo2.png)",width:"100%", height:"100%", marginLeft:"30px", backgroundRepeat:"no-repeat"}}>
                  </a>
                </li>
              </ul>
          </div>
            <div className="container" style={{marginLeft:"100px"}}>
              <div className="navbar-header" style={{paddingTop: "5px"}}>
                <a className="navbar-brand" href="#" style={headerStyle}>Brendon White</a>
              </div>
              <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav" style={{paddingTop: "5px" }}>
                  <li >
                    <a href="#ProjectOne" style={headerStyle}>Project 1</a>
                  </li>
                  <li>
                    <a href="#ProjectTwo" style={headerStyle}>Project 2</a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right" style={{paddingTop: "5px"}}>
                  <li>
                    <a className="navbar-text navbar-right" href="https://www.github.com/whiteb38" target="_blank" style={{backgroundImage:"url(../extra/Webp.net-resizeimage.png)", width:"90px", height:"20px", backgroundRepeat: "no-repeat", marginTop:"6px", marginRight:"20px"}}>
                    </a>
                  </li>
                  <li>
                    <a className="navbar-text navbar-right" href="https://www.linkedin.com/in/brendon-white-55896b58/" target="_blank" style={{backgroundImage:"url(../extra/Logo-2C-21px-TM.png)", width:"100px", height:"20px", backgroundRepeat: "no-repeat", marginTop:"14px"}}>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
  }
}
export default Header;
