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
    return <div />;
  }
}
