"use strict";

import React from "react";
import { connect } from "react-redux";
import { updateAuth } from "./actions";

class Authenticator extends React.Component {
  constructor() {
    super();
    this.state = { authCode: authCodeGenerator(), colorTime: 0 };
  }

  componentDidMount() {
    this.props.updateAuth("Google", this.state.authCode);
    this.interval = setInterval(() => {
      let authCodeGen = authCodeGenerator();
      this.setState({ authCode: authCodeGen });
      this.props.updateAuth("Google", authCodeGen);
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
    let newAuth;
    if (this.state.colorTime === 0) {
      newAuth = <div style={{ color: "green" }}>{this.state.authCode}</div>;
    } else if (this.state.colorTime === 5) {
      let redAuth = this.state.authCode.slice(0, 1);
      let greenAuth = this.state.authCode.slice(1);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    } else if (this.state.colorTime === 10) {
      let redAuth = this.state.authCode.slice(0, 2);
      let greenAuth = this.state.authCode.slice(2);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    } else if (this.state.colorTime === 15) {
      let redAuth = this.state.authCode.slice(0, 3);
      let greenAuth = this.state.authCode.slice(3);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    } else if (this.state.colorTime === 20) {
      let redAuth = this.state.authCode.slice(0, 5);
      let greenAuth = this.state.authCode.slice(5);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    } else if (this.state.colorTime === 25) {
      let redAuth = this.state.authCode.slice(0, 6);
      let greenAuth = this.state.authCode.slice(6);
      newAuth = (
        <div>
          <span style={{ color: "red" }}>{redAuth}</span>
          <span style={{ color: "green" }}>{greenAuth}</span>
        </div>
      );
    }

    return <div>{newAuth}</div>;
  }
}

export default connect(
  null,
  { updateAuth }
)(Authenticator);

const authCodeGenerator = () => {
  let authCodeGen = Math.floor(100000 + Math.random() * 1000000).toString();
  let authCodeFirst = authCodeGen.slice(0, 3);
  let authCodeSecond = authCodeGen.slice(3, 6);
  return authCodeFirst + " " + authCodeSecond;
};
