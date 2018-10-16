"use strict";

import React from "react";

class AuthenticatorTest extends React.Component {
  constructor() {
    super();
    this.state = {
      appName: null
    };
    this.setAppName = this.setAppName.bind(this);
  }

  setAppName(e) {
    let appName = e.target.value;
    if (appName === "Please select an application") {
      appName = null;
    }
    this.setState({ appName });
  }

  render() {
    let color = this.props.color ? "green" : !this.props.color ? "red" : null;
    let options = this.props.authCodes.map((item, index) => {
      return <option key={item.name}>{item.name}</option>;
    });

    let activeDisabled;
    if (this.state.appName) {
      activeDisabled = false;
    } else {
      activeDisabled = true;
    }

    return (
      <form>
        <div className="form-group">
          <label htmlFor="appNames">Select an App</label>
          <select
            className="form-control"
            id="appNames"
            onChange={e => this.setAppName(e)}
          >
            <option>Please select an application</option>
            {options}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="authTest">Test Auth Token: </label>
          <input
            style={{ color: color }}
            type="text"
            className="form-control"
            id="authTest"
            placeholder="Enter your authentication token"
            onChange={e => this.props.setTestCode(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => this.props.testAuthCode(e, this.state.appName)}
          disabled={activeDisabled}
        >
          Test
        </button>
      </form>
    );
  }
}
export default AuthenticatorTest;
