import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          height: "45vh",
          backgroundRepeat: "no-repeat",
          marginTop: "300px"
        }}
      >
        <div className="col-sm-12 d-none d-sm-block">
          <div id="text" style={{ fontSize: "75px", color: "white" }}>
            Brendon White
          </div>
          <div style={{ fontSize: "30px", color: "white" }}>
            <p className="accent-text">
              Front End Engineering / Web Development
            </p>
            <p>
              Software Engineer at GE Digital
              <br />
              Indiana University / Michigan State University
            </p>
          </div>
        </div>
        <div
          className="d-block d-sm-none col-sm-12"
          style={{ marginTop: "110px" }}
        >
          <div style={{ fontSize: "60px", color: "white" }}>Brendon White</div>
          <div style={{ fontSize: "30px" }}>
            <p className="accent-text">
              Front End Engineering / Web Development
            </p>
            <p>
              Software Engineer at GE Digital
              <br />
              Indiana University / Michigan State University
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;

// <div className="col-sm-6">
//   <div className="card" style={cardStyle}>
//     <div className="card-block" style={cardBlockStyle}>
//       <h4 className="card-title">Experience</h4>
//       <p className="card-text">Built admin web app to manage foreign language table from client – C#, ReactJS, SQL;
//                               Developed ‘banner tool’ for platform wide announcements – C#, ReactJS, SQL, HTML, CSS;
//                               Built portal using MEAN stack - MongoDB, Express.JS, Angular.JS, Node.JS;
//                               Daily: Building RESTful API’s, defect/bug fixer for admin tools & continually adding functionality based on end user requests </p>
//       <a href="#" className="btn btn-primary">Link if necessary</a>
//     </div>
//   </div>
// </div>
