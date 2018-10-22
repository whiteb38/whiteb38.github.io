import React from "react";
require("velocity-animate");
require("velocity-animate/velocity.ui");
import "aos/dist/aos.css";
import AOS from "aos";
import ExperienceRedesign from "./ExperienceRedesign";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      cardOne: false,
      cardTwo: false,
      cardThree: false,
      cardFour: false
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.setCardOne = this.setCardOne.bind(this);
    this.setCardTwo = this.setCardTwo.bind(this);
    this.setCardThree = this.setCardThree.bind(this);
    this.setCardFour = this.setCardFour.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
  }

  setCardOne() {
    const cardOne = !this.state.cardOne;
    this.setState({ cardOne });
  }

  setCardTwo() {
    const cardTwo = !this.state.cardTwo;
    this.setState({ cardTwo });
  }

  setCardThree() {
    const cardThree = !this.state.cardThree;
    this.setState({ cardThree });
  }

  setCardFour() {
    const cardFour = !this.state.cardFour;
    this.setState({ cardFour });
  }

  render() {
    AOS.init();

    var activeCard = {
      margin: "auto",
      width: "400px",
      height: "520px",
      backgroundColor: "#314455"
    };
    let smallCard = {
      margin: "auto",
      width: "400px",
      height: "100px",
      backgroundColor: "#314455"
    };
    var cardBlockStyle = { padding: "15px" };

    if (this.state.width < 1200) {
      return (
        <ExperienceRedesign
          experienceRef={this.props.experienceRef}
          cardOne={this.state.cardOne}
          cardTwo={this.state.cardTwo}
          cardThree={this.state.cardThree}
          cardFour={this.state.cardFour}
          setCardOne={this.setCardOne}
          setCardTwo={this.setCardTwo}
          setCardThree={this.setCardThree}
          setCardFour={this.setCardFour}
        />
      );
    }
    return (
      <div ref={this.props.experienceRef}>
        <div style={{ margin: "auto", width: "195px" }}>
          <h1 style={{ color: "white" }}>Experience</h1>
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <hr className="header_underline" />
        </div>
        <div className="row">
          <div
            className="col"
            style={{ paddingRight: "0px", paddingLeft: "70px" }}
          >
            <div
              className="card"
              data-aos="fade-right"
              data-aos-once="true"
              style={this.state.cardOne ? activeCard : smallCard}
            >
              <div className="card-style" onClick={this.setCardOne}>
                <h4
                  style={{
                    fontSize: "35px",
                    color: "#DEF2F1",
                    textAlign: "center",
                    verticalAlign: "middle",
                    lineHeight: "100px",
                    margin: "auto"
                  }}
                >
                  Skills
                </h4>
              </div>
              {this.state.cardOne ? (
                <div className="container" style={cardBlockStyle}>
                  <p
                    className="card-text white-txt txt"
                    style={{ fontSize: "20px" }}
                  >
                    <strong>Programming Languages</strong>:
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    JavaScript, SQL, C#, Python
                  </p>
                  <p
                    className="card-text white-txt  txt"
                    style={{ fontSize: "20px" }}
                  >
                    <strong>Frameworks & Libraries</strong>:
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    {" "}
                    ReactJS, jQuery, Node.js, AngularJS{" "}
                  </p>
                  <p
                    className="card-text white-txt  txt"
                    style={{ fontSize: "20px" }}
                  >
                    <strong>Database</strong>:
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    MySQL
                  </p>
                  <p
                    className="card-text white-txt  txt"
                    style={{ fontSize: "20px" }}
                  >
                    <strong>Software</strong>:
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Microsoft SQL Server, Visual Studio.Net, <br />
                    Atom, Postman, SOAPUI
                  </p>
                  <p
                    className="card-text white-txt txt"
                    style={{ fontSize: "20px" }}
                  >
                    <strong>Version Control</strong>:
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Github
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div
            className="col"
            style={{ paddingLeft: "-40px", paddingRight: "70px" }}
          >
            <div
              className="card"
              data-aos="fade-left"
              data-aos-once="true"
              style={this.state.cardTwo ? activeCard : smallCard}
            >
              <div className="card-style" onClick={this.setCardTwo}>
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
              {this.state.cardTwo ? (
                <div className="container" style={cardBlockStyle}>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "20px" }}
                  >
                    <strong>GE Energy Connections</strong>
                    <span style={{ fontSize: "18px" }}>(Current)</span>
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Built admin web app to manage foreign language <br /> table
                    from client
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Developed ‘banner tool’ for platform wide <br />{" "}
                    announcements
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Built portal using MEAN stack
                    <br />
                    MongoDB, Express.JS, Angular.JS, Node.JS
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Wrote scripts, stored procedures,
                    <br /> and functions in MySQL
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Daily: Building RESTful API’s,
                    <br /> defect/bug fixer for admin tools & continually adding
                    <br /> functionality based on end user requests
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div
            className="col"
            style={{ paddingRight: "0px", paddingLeft: "70px" }}
          >
            <div
              className="card"
              data-aos="fade-right"
              data-aos-once="true"
              style={this.state.cardThree ? activeCard : smallCard}
            >
              <div className="card-style" onClick={this.setCardThree}>
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
              {this.state.cardThree ? (
                <div className="container" style={cardBlockStyle}>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "20px" }}
                  >
                    <strong>GE Energy Connections</strong>
                    <span style={{ fontSize: "18px" }}>
                      (July 2016 - February 2017)
                    </span>
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Developed middleware connectors in SAP PI:
                    <br /> A&C SAP system to digital commerce platform
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Created mapping and logic connecting BAPIs
                    <br /> and IDOCs to Web Service broker
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Deployed and tested the “one-EC” commercial
                    <br /> tool, empower & led Scrum Team to deliver
                    <br /> order tracking services in empower dev
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Managed an agile team thru 11 sprints to deliver
                    <br /> reusable connectors for 6 services, a month ahead
                    <br /> of schedule
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Led testing using SOAPUI
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div
            className="col"
            style={{ paddingLeft: "-40px", paddingRight: "70px" }}
          >
            <div
              className="card"
              data-aos="fade-left"
              data-aos-once="true"
              style={this.state.cardFour ? activeCard : smallCard}
            >
              <div className="card-style" onClick={this.setCardFour}>
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
              {this.state.cardFour ? (
                <div className="container" style={cardBlockStyle}>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "20px" }}
                  >
                    <strong>GE Energy Connections</strong>
                    <span style={{ fontSize: "18px" }}>
                      (July 2015 - June 2016)
                    </span>
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Led TeamCenter Product Lifecycle Management
                    <br /> rollout for Shanghai plant: 3 KUTs, BPA, & test
                    cycles
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Coordinated machine upgrade for ~165 users
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Led development and functional testing for
                    <br /> multiple QlikView dashboards displaying supply
                    <br /> chain analytics previously viewed manually on
                    <br /> excel
                  </p>
                  <p
                    className="card-text white-txt"
                    style={{ fontSize: "15px" }}
                  >
                    Developed IS BI team landing page; “one-stop-shop”
                    <br /> for all QlikView and Business Objects dashboards
                    <br /> using JavaScript, jQuery, HTML, CSS
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
