import React from "react";
require("velocity-animate");
require("velocity-animate/velocity.ui");
import "aos/dist/aos.css";
import AOS from "aos";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    AOS.init();
    var cardStyle = {
      borderBottomRightRadius: "30px",
      margin: "auto",
      width: "400px",
      height: "520px",
      backgroundColor: "white"
    };
    var cardBlockStyle = { padding: "15px" };
    return (
      <div>
        <div className="row">
          <div
            className="col-md-6 col-xs-12"
            style={{ paddingRight: "0px", paddingLeft: "70px" }}
          >
            <div className="card" data-aos="fade-right" style={cardStyle}>
              <div style={{ backgroundColor: "#185274", minHeight: "100px" }}>
                <h4
                  style={{
                    fontSize: "40px",
                    color: "white",
                    textAlign: "center",
                    verticalAlign: "middle",
                    lineHeight: "100px",
                    margin: "auto"
                  }}
                >
                  Skills
                </h4>
              </div>
              <div className="container" style={cardBlockStyle}>
                <p className="card-text txt" style={{ fontSize: "20px" }}>
                  <strong>Programming Languages</strong>:
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  JavaScript, SQL, C#, Python
                </p>
                <p className="card-text  txt" style={{ fontSize: "20px" }}>
                  <strong>Frameworks & Libraries</strong>:
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  {" "}
                  ReactJS, jQuery, Node.js, AngularJS{" "}
                </p>
                <p className="card-text  txt" style={{ fontSize: "20px" }}>
                  <strong>Database</strong>:
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  MySQL
                </p>
                <p className="card-text  txt" style={{ fontSize: "20px" }}>
                  <strong>Software</strong>:
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Microsoft SQL Server, Visual Studio.Net, <br />
                  Atom, Postman, SOAPUI
                </p>
                <p className="card-text txt" style={{ fontSize: "20px" }}>
                  <strong>Version Control</strong>:
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Github
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-xs-12"
            style={{ paddingLeft: "-40px", paddingRight: "70px" }}
          >
            <div className="card" data-aos="fade-left" style={cardStyle}>
              <div style={{ backgroundColor: "#2376A7", minHeight: "100px" }}>
                <h4
                  style={{
                    fontSize: "35px",
                    color: "white",
                    textAlign: "center",
                    verticalAlign: "middle",
                    lineHeight: "100px",
                    margin: "auto"
                  }}
                >
                  Software Engineer
                </h4>
              </div>
              <div className="container" style={cardBlockStyle}>
                <p className="card-text" style={{ fontSize: "20px" }}>
                  <strong>GE Energy Connections</strong>
                  <span style={{ fontSize: "18px" }}>(Current)</span>
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Built admin web app to manage foreign language <br /> table
                  from client
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Developed ‘banner tool’ for platform wide <br /> announcements
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Built portal using MEAN stack
                  <br />
                  MongoDB, Express.JS, Angular.JS, Node.JS
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Wrote scripts, stored procedures,
                  <br /> and functions in MySQL
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Daily: Building RESTful API’s,
                  <br /> defect/bug fixer for admin tools & continually adding
                  <br /> functionality based on end user requests
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div
            className="col-md-6 col-xs-12"
            style={{ paddingRight: "0px", paddingLeft: "70px" }}
          >
            <div className="card" data-aos="fade-right" style={cardStyle}>
              <div style={{ backgroundColor: "#5C94B6", minHeight: "100px" }}>
                <h4
                  style={{
                    fontSize: "35px",
                    color: "white",
                    textAlign: "center",
                    verticalAlign: "middle",
                    lineHeight: "100px",
                    margin: "auto"
                  }}
                >
                  Scrum Master
                </h4>
              </div>
              <div className="container" style={cardBlockStyle}>
                <p className="card-text" style={{ fontSize: "20px" }}>
                  <strong>GE Energy Connections</strong>
                  <span style={{ fontSize: "18px" }}>
                    (July 2016 - February 2017)
                  </span>
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Developed middleware connectors in SAP PI:
                  <br /> A&C SAP system to digital commerce platform
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Created mapping and logic connecting BAPIs
                  <br /> and IDOCs to Web Service broker
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Deployed and tested the “one-EC” commercial
                  <br /> tool, empower & led Scrum Team to deliver
                  <br /> order tracking services in empower dev
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Managed an agile team thru 11 sprints to deliver
                  <br /> reusable connectors for 6 services, a month ahead
                  <br /> of schedule
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Led testing using SOAPUI
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-xs-12"
            style={{ paddingLeft: "-40px", paddingRight: "70px" }}
          >
            <div className="card" data-aos="fade-left" style={cardStyle}>
              <div style={{ backgroundColor: "#7CC7F3", minHeight: "100px" }}>
                <h4
                  style={{
                    fontSize: "35px",
                    color: "white",
                    textAlign: "center",
                    verticalAlign: "middle",
                    lineHeight: "100px",
                    margin: "auto"
                  }}
                >
                  Project Manager
                </h4>
              </div>
              <div className="container" style={cardBlockStyle}>
                <p className="card-text" style={{ fontSize: "20px" }}>
                  <strong>GE Energy Connections</strong>
                  <span style={{ fontSize: "18px" }}>
                    (July 2015 - June 2016)
                  </span>
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Led TeamCenter Product Lifecycle Management
                  <br /> rollout for Shanghai plant: 3 KUTs, BPA, & test cycles
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Coordinated machine upgrade for ~165 users
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Led development and functional testing for
                  <br /> multiple QlikView dashboards displaying supply
                  <br /> chain analytics previously viewed manually on
                  <br /> excel
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Developed IS BI team landing page; “one-stop-shop”
                  <br /> for all QlikView and Business Objects dashboards
                  <br /> using JavaScript, jQuery, HTML, CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
