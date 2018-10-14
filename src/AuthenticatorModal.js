import React from "react";
import Authenticator from "./Authenticator";
import { connect } from "react-redux";

class AuthenticatorModal extends React.Component {
  constructor() {
    super();
    this.state = { test: null };
    this.testAuthCode = this.testAuthCode.bind(this);
  }

  testAuthCode(e, testCode) {
    e.preventDefault();
    if (testCode && testCode === this.props.authCodes[0].authCode) {
      this.setState({ test: true });
    } else {
      this.setState({ test: false });
    }
  }

  render() {
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
                  <span>
                    <a style={{ display: "inlineBlock", fontSize: "30px" }}>
                      Google
                    </a>
                  </span>
                  <Authenticator />
                </div>
                <div className="col-12">
                  <TestAuth
                    authCodes={this.props.authCodes}
                    testAuthCode={this.testAuthCode}
                    color={this.state.test}
                  />
                </div>
              </div>
              <div className="modal-footer">
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
  null
)(AuthenticatorModal);

class TestAuth extends React.Component {
  constructor() {
    super();
    this.state = {
      testCode: null
    };
    this.setTestCode = this.setTestCode.bind(this);
  }

  setTestCode(e) {
    let testCode = e.target.value;
    this.setState({ testCode });
  }

  render() {
    let color = this.props.color ? "green" : !this.props.color ? "red" : null;

    return (
      <form>
        <div className="form-group">
          <label htmlFor="authTest">Test Auth Code: </label>
          <input
            style={{ color: color }}
            type="text"
            className="form-control"
            id="authTest"
            placeholder="Enter your authentication code"
            onChange={this.setTestCode}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => this.props.testAuthCode(e, this.state.testCode)}
        >
          Test
        </button>
      </form>
    );
  }
}
