import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ProjectTwo extends React.Component {
  constructor() {
    super();
    this.state= {
    };
  }
  render(){
    return(
        <div className="row featurette">
          <div className="col-md-7 col-md-push-5">
            <h2 className="featurette-heading">
              First feature heading.
              <span className="text-muted"> Itll blow your mind!</span>
            </h2>
            <p className="lead">
              Project info goes here; Details about the project; Tech stack, libraries, and more is all included; blah blah blah
            </p>
          </div>
          <div className="col-md-5 col-md-pull-7">
            <img className="featurette-image img-responsive center-block" style={{borderRadius: "15px"}} data-src="holder.js/500x500/auto" alt="500x500" src="../extra/placeholder.png" data-holder-rendered="true" />
          </div>
        </div>
    );
  }
}
export default ProjectTwo;
