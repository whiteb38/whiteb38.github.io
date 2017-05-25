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
        <div style={{backgroundColor: "#d1404a", borderBottomRightRadius: "30px", height:"500px", backgroundRepeat: "no-repeat"}}>
          <div className="container hidden-xs" style={{overflow:"hidden"}}>
            <div className="row" style={{marginTop:"150px"}}>
              <div className="col-sm-12" style={{float: "right"}}>
                <div className="card" id="headerDiv"style={{textAlign: "center", verticalAlign: "middle"}}>
                  <div className="card-block hidden-xs" style={cardBlockStyle}>
                    <p className="card-text" style={{fontFamily:"ubuntu",fontSize: "18px", color: "white", fontWeight:"700"}}></p><br/>
                                          <p style={{fontFamily:"ubuntu",fontWeight: "bold", fontSize: "calc(60px + -.5vw)", color: "white"}}>Side Projects</p>
                  </div>
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
              <span style={{color: "#B50500"}}> MEAN stack</span>
            </h2>
            <p className="lead">
              Responsive web app built with AngularJS, Express, Node.js. Scales based on data. To be used by multiple sales teams accross global company as customer facing employee portal.
            </p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" style={{borderRadius: "15px", maxWidth: "80%"}} src="../extra/placeholder.png" data-holder-rendered="true" />
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Projects;
