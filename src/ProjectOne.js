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
              First feature heading.
              <span style={{color: "#565656"}}> Itll blow your mind!</span>
            </h2>
            <p className="lead">
              Project info goes here; Details about the project; Tech stack, libraries, and more is all included; blah blah blah
            </p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-responsive center-block" style={{borderRadius: "15px"}} data-src="holder.js/500x500/auto" alt="500x500" src="../extra/placeholder.png" data-holder-rendered="true" />
          </div>
        </div>
    );
  }
}
export default ProjectOne;
