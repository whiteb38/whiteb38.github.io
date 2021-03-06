"use strict";

import React from "react";
import { connect } from "react-redux";

class Authenticator extends React.Component {
  constructor() {
    super();
    this.state = { colorTime: 0 };
  }

  componentDidMount() {
    this.props.updateAuth(this.props.name, authCodeGenerator());
    this.interval = setInterval(() => {
      let authCodeGen = authCodeGenerator();
      this.props.updateAuth(this.props.name, authCodeGen);
    }, 30000);
    this.colorInterval = setInterval(() => {
      let colorTime =
        this.state.colorTime === 25 ? 0 : this.state.colorTime + 5;
      this.setState({ colorTime: colorTime });
    }, 5000);
  }

  componentWillUnmount() {
    this.clearInterval(this.interval);
    this.clearInterval(this.colorInterval);
  }

  render() {
    let authCodeString;
    if (this.props.authCode) {
      let authCodeFirst = this.props.authCode.slice(0, 3);
      let authCodeSecond = this.props.authCode.slice(3, 6);
      authCodeString = authCodeFirst + " " + authCodeSecond;
    }

    let newAuth;
    if (this.state.colorTime === 0) {
      newAuth = <div style={{ color: "green" }}>{authCodeString}</div>;
    } else if (this.state.colorTime === 5) {
      let redAuth = authCodeString.slice(0, 1);
      let greenAuth = authCodeString.slice(1);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    } else if (this.state.colorTime === 10) {
      let redAuth = authCodeString.slice(0, 2);
      let greenAuth = authCodeString.slice(2);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    } else if (this.state.colorTime === 15) {
      let redAuth = authCodeString.slice(0, 3);
      let greenAuth = authCodeString.slice(3);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    } else if (this.state.colorTime === 20) {
      let redAuth = authCodeString.slice(0, 5);
      let greenAuth = authCodeString.slice(5);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    } else if (this.state.colorTime === 25) {
      let redAuth = authCodeString.slice(0, 6);
      let greenAuth = authCodeString.slice(6);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    }

    return (
      <div>
        <span>
          <a style={{ display: "inlineBlock", fontSize: "30px" }}>
            {this.props.name}
          </a>
        </span>
        {newAuth}
      </div>
    );
  }
}

export default Authenticator;

const authCodeGenerator = () => {
  let authCodeGen = Math.floor(100000 + Math.random() * 1000000).toString();
  return authCodeGen;
};
