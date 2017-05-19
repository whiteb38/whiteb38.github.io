import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ProjectOne extends React.Component {
  constructor() {
    super();
    this.state= {
    };
  }
  render(){
    return(
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Responsive Web App
              <span style={{color: "#565656"}}> MEAN stack</span>
            </h2>
            <p className="lead">
              Responsive web app built with AngularJS, Express, Node.js. Scales based on data. To be used by multiple sales teams accross global company as customer facing employee portal.
            </p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" style={{borderRadius: "15px", maxWidth: "80%"}} src="../extra/placeholder.png" data-holder-rendered="true" />
          </div>
        </div>
    );
  }
}
export default ProjectOne;
