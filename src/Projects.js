import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/global.css";
import "aos/dist/aos.css";
import AOS from "aos";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    AOS.init();
    var cardStyle = {
      borderRadius: "15px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      border: "1px solid",
      padding: "0px"
    };
    var cardBlockStyle = { padding: "10px" };
    return (
      <div className="container" style={{ borderRadius: "5px" }}>
        <div style={{ margin: "auto", width: "130px" }}>
          <h1>Projects</h1>
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <hr
            style={{ width: "300px", marginLeft: "auto", marginRight: "auto" }}
          />
        </div>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 data-aos="fade-right" className="featurette-heading">
              Responsive Web App
              <span style={{ color: "#EB6361" }}> MEAN stack</span>
            </h2>
            <p className="lead" data-aos="fade-right">
              Responsive web app built with AngularJS, Express, Node.js. Scales
              based on data. To be used by multiple sales teams accross global
              company as customer facing employee portal.
            </p>
          </div>
          <div className="col-md-5" data-aos="fade-left">
            <img
              className="featurette-image img-responsive center-block"
              style={{ borderRadius: "15px", maxWidth: "80%" }}
              src="../extra/meanLogo.png"
              data-holder-rendered="true"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
