import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/global.css';

class Projects extends React.Component {
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
        <div style={{backgroundColor: "#EB6361", borderBottomRightRadius: "30px", height:"500px", backgroundRepeat: "no-repeat"}}>
          <div className="container" style={{overflow:"hidden"}}>
            <div className="row" style={{marginTop:"150px"}}>
              <div className="col-sm-12 hidden-xs" style={{marginTop:"50"}}>
                  <div id="text" style={{fontSize:"75px", color: "white", textAlign:"center"}}>
                    Projects
                  </div>
                </div>
                <div id="text" className="col-sm-12 visible-xs" style={{marginTop:"50"}}>
                    <div style={{fontSize:"65px", color: "white", textAlign:"center"}}>
                      Projects
                    </div>
                </div>
            </div>
            <br />
          </div>
        </div>
        <div className="container" style={{padding:"30px",borderRadius:"5px"}}>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Responsive Web App
              <span style={{color: "#EB6361"}}> MEAN stack</span>
            </h2>
            <p className="lead">
              Responsive web app built with AngularJS, Express, Node.js. Scales based on data. To be used by multiple sales teams accross global company as customer facing employee portal.
            </p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" style={{borderRadius: "15px", maxWidth: "80%"}} src="../extra/meanLogo.png" data-holder-rendered="true" />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Projects;
