import React from "react";

class AddNewAuth extends React.Component {
  constructor() {
    super();
    this.state = {
      appName: null,
      appExists: false
    };
    this.setNewAppName = this.setNewAppName.bind(this);
    this.checkAppName = this.checkAppName.bind(this);
    this.addNewAuth = this.addNewAuth.bind(this);
  }

  setNewAppName(e) {
    let appName = e.target.value;
    this.setState({ appName });
  }

  checkAppName(e) {
    e.preventDefault();
    let appExists = false;
    for (let i = 0; i < this.props.authCodes.length; i++) {
      if (this.props.authCodes[i].name === this.state.appName) {
        appExists = true;
        break;
      }
    }
    if (appExists) {
      this.setState({ appExists });
    } else {
      this.setState({ appExists });
      this.addNewAuth();
    }
  }

  addNewAuth(e) {
    this.props.addNewAuth(this.state.appName);
    this.props.closeAdd();
  }

  render() {
    let activeDisabled;
    if (this.state.appName) {
      activeDisabled = false;
    } else {
      activeDisabled = true;
    }
    let appExistsMessage;
    if (this.state.appExists) {
      appExistsMessage = (
        <span style={{ paddingLeft: "10px", color: "red" }}>
          App already exists, please add a new one
        </span>
      );
    }
    return (
      <form>
        <div className="form-group">
          <label htmlFor="addAuth">Add New: </label>
          <input
            type="text"
            className="form-control"
            id="addAuth"
            placeholder="Enter new app name"
            onChange={this.setNewAppName}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => this.checkAppName(e)}
          disabled={activeDisabled}
        >
          Add
        </button>
        {appExistsMessage}
      </form>
    );
  }
}

export default AddNewAuth;
