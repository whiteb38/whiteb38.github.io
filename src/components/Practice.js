import React from "react";
import Chart from "./Chart";
import "aos/dist/aos.css";
import AOS from "aos";

class Practice extends React.Component {
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
      <div>
        <div
          style={{ margin: "auto", width: "218px" }}
          ref={this.props.frameWorksRef}
        >
          <h1 style={{ color: "white" }}>Frameworks</h1>
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <hr className="header_underline" />
        </div>
        <div
          className="container marketing"
          style={{ padding: "20px", borderRadius: "5px" }}
        >
          <Chart />
          <div className="row featurette">
            <div className="col-md-5" />
            <div className="col-md-7">
              <h2
                data-aos="fade-left"
                data-aos-once="true"
                className="featurette-heading projects-maintext"
              >
                React Scroll
                <span className="projects-subtext"> Scrollto position</span>
              </h2>
              <p data-aos="fade-left" data-aos-once="true" className="lead">
                In order to incorporate 'hash style' scrolling in the header
                links, I used the react-scroll library. It allows the ability to
                scroll to a position (not supported by react-router) on the page
                with add-ons like animation. Next steps are to contribute to the
                library to create scroll to component instead of position.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Practice;
