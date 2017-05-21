import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Experience extends React.Component {
  constructor() {
    super();
    this.state= {
    };
  }
  render(){
    var cardStyle={ borderRadius:"15px", position: "relative", display:"flex", flexDirection:"column", backgroundColor: "white", border:"1px solid", padding: "0px"};
    var cardBlockStyle={padding:"15px"};
    return(
<div>
<div className="row">
  <div className="col-sm-6">
    <div className="card"  style={cardStyle}>
      <div className="card-block" style={cardBlockStyle}>
        <h4 className="card-title">Experience</h4>
        <ul>
          <li className="card-text">Built admin web app to manage foreign language table from client – C#, ReactJS, SQL</li>
          <li className="card-text">Developed ‘banner tool’ for platform wide announcements – C#, ReactJS, SQL, HTML, CSS</li>
          <li className="card-text">Built portal using MEAN stack - MongoDB, Express.JS, Angular.JS, Node.JS</li>
          <li className="card-text">Daily: Building RESTful API’s, defect/bug fixer for admin tools & continually adding functionality based on end user requests</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-sm-6" >
    <div className="card" style={cardStyle}>
      <div className="card-block" style={cardBlockStyle}>
        <h4 className="card-title">Skills</h4>
          <p className="card-text"><strong>Programming Languages</strong>: Currently use JavaScript, SQL, C#. Previously Python</p>
          <p className="card-text"><strong>Database</strong>:  MySQL</p>
          <p className="card-text"><strong>Frameworks & Libraries</strong>: ReactJS, jQuery, Node.js, AngularJS </p>
          <p className="card-text"><strong>Software</strong>: Microsoft SQL Server, Visual Studio.Net, Atom, Postman, SOAPUI</p>
          <p className="card-text"><strong>Version Control</strong>: Github</p>
      </div>
    </div>
  </div>
</div>
<br/>
<div className="row">
  <div className="col-sm-6">
    <div className="card"  style={cardStyle}>
      <div className="card-block" style={cardBlockStyle}>
        <h4 className="card-title">Experience</h4>
        <ul>
          <li className="card-text">Built admin web app to manage foreign language table from client – C#, ReactJS, SQL</li>
          <li className="card-text">Developed ‘banner tool’ for platform wide announcements – C#, ReactJS, SQL, HTML, CSS</li>
          <li className="card-text">Built portal using MEAN stack - MongoDB, Express.JS, Angular.JS, Node.JS</li>
          <li className="card-text">Daily: Building RESTful API’s, defect/bug fixer for admin tools & continually adding functionality based on end user requests</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-sm-6" >
    <div className="card" style={cardStyle}>
      <div className="card-block" style={cardBlockStyle}>
        <h4 className="card-title">Skills</h4>
          <p className="card-text"><strong>Programming Languages</strong>: Currently use JavaScript, SQL, C#. Previously Python</p>
          <p className="card-text"><strong>Database</strong>:  MySQL</p>
          <p className="card-text"><strong>Frameworks & Libraries</strong>: ReactJS, jQuery, Node.js, AngularJS </p>
          <p className="card-text"><strong>Software</strong>: Microsoft SQL Server, Visual Studio.Net, Atom, Postman, SOAPUI</p>
          <p className="card-text"><strong>Version Control</strong>: Github</p>
      </div>
    </div>
  </div>
</div>
</div>
);
}
}
export default Experience;
