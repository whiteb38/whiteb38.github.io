import React from "react";
import Authenticator from "./Authenticator";
import AddNewAuth from "./AddNewAuth";
import { connect } from "react-redux";
import { updateAuth, addNewAuth } from "../actions";

class AuthenticatorModal extends React.Component {
  constructor() {
    super();
    this.state = { test: null, addCode: false };
    this.testAuthCode = this.testAuthCode.bind(this);
    this.addNewAuthCode = this.addNewAuthCode.bind(this);
    this.closeAdd = this.closeAdd.bind(this);
  }

  testAuthCode(e, testCode, appName) {
    e.preventDefault();
    let appIndex = this.props.authCodes.findIndex(
      authCodes => authCodes.name === appName
    );
    if (testCode && testCode === this.props.authCodes[appIndex].authCode) {
      this.setState({ test: true });
    } else {
      this.setState({ test: false });
    }
  }

  addNewAuthCode() {
    let addCodeState = this.state.addCode;
    this.setState({ addCode: !addCodeState });
  }

  closeAdd() {
    this.setState({ addCode: false });
  }

  render() {
    let testOrAdd;
    let addButton;
    if (this.state.addCode) {
      addButton = "fa fa-times";
      testOrAdd = (
        <AddNewAuth
          authCodes={this.props.authCodes}
          addNewAuth={this.props.addNewAuth}
          closeAdd={this.closeAdd}
        />
      );
    } else {
      addButton = "fa fa-plus";
      testOrAdd = (
        <TestAuth
          authCodes={this.props.authCodes}
          testAuthCode={this.testAuthCode}
          color={this.state.test}
        />
      );
    }
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch Authenticator App
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Authenticator
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div
                  className="col-12"
                  style={{ fontSize: "20px", textAlign: "center" }}
                >
                  {this.props.authCodes.map((item, index) => {
                    return (
                      <div key={item.name}>
                        <Authenticator
                          authCode={item.authCode}
                          name={item.name}
                          updateAuth={this.props.updateAuth}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="col-12">{testOrAdd}</div>
              </div>
              <div className="modal-footer">
                <span
                  className={addButton}
                  style={{
                    paddingRight: "10px",
                    color: "#007bff",
                    fontSize: "25px",
                    cursor: "pointer"
                  }}
                  onClick={this.addNewAuthCode}
                />
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authCodes: state.authCodes
  };
};

export default connect(
  mapStateToProps,
  { updateAuth, addNewAuth }
)(AuthenticatorModal);

class TestAuth extends React.Component {
  constructor() {
    super();
    this.state = {
      appName: null,
      testCode: null
    };
    this.setTestCode = this.setTestCode.bind(this);
    this.setAppName = this.setAppName.bind(this);
  }

  setAppName(e) {
    let appName = e.target.value;
    if (appName === "Please select an application") {
      appName = null;
    }
    this.setState({ appName });
  }

  setTestCode(e) {
    let testCode = e.target.value;
    this.setState({ testCode });
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
            onChange={this.setTestCode}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={e =>
            this.props.testAuthCode(e, this.state.testCode, this.state.appName)
          }
          disabled={activeDisabled}
        >
          Test
        </button>
      </form>
    );
  }
}
