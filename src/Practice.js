import React from 'react';
import Chart from './Chart';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/global.css';

class Practice extends React.Component {
  constructor() {
    super();
    this.state= {
    };
  }
  render(){
    var cardStyle={ borderRadius:"15px", position: "relative", display:"flex", flexDirection:"column", backgroundColor: "white", border:"1px solid", padding: "0px"};
    var cardBlockStyle={padding:"10px"};
    return(
      <div>
        <div style={{backgroundColor: "#4CD4B0", borderBottomRightRadius: "30px", height:"500px", backgroundRepeat: "no-repeat"}}>
          <div className="container" style={{overflow:"hidden"}}>
            <div id="text" className="col-sm-12 hidden-xs" style={{marginTop:"150"}}>
                <div style={{fontSize:"75px", color: "white", textAlign:"center"}}>
                  Frameworks, Libraries, & Add-ons
                </div>
              </div>
              <div id="text" className="col-sm-12 visible-xs" style={{marginTop:"150"}}>
                  <div style={{fontSize:"55px", color: "white", textAlign:"center"}}>
                    Frameworks, Libraries, & Add-ons
                  </div>
              </div>
            <br />
          </div>
        </div>
      <div style={{padding:"20px"}}>
        <div className="container marketing" style={{padding:"20px", borderRadius:"5px"}}>
          <Chart />
            <div className="row featurette">
              <div className="col-md-5">

              </div>
              <div className="col-md-7">
                <h2 className="featurette-heading">
                  React Scroll
                  <span style={{color: "#4CD4B0"}}> Scrollto position</span>
                </h2>
                <p className="lead">
                  In order to incorporate 'hash style' scrolling in the header links, I used the react-scroll library. It allows the ability to scroll to a position (not supported by react-router) on the page with add-ons like animation. Next steps are to contribute to the library to create scroll to component instead of position.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )}
}
export default Practice;
