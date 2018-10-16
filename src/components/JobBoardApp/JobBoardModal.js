import React from "react";
import JobCard from "./JobCard";
import { connect } from "react-redux";

class JobBoardModal extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#jobModal"
        >
          Launch Job Board App
        </button>

        <div
          className="modal fade"
          id="jobModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="jobModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="jobModalLabel">
                  Job Board
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
                  {this.props.jobs.map((job, index) => {
                    return (
                      <div key={job.jobID}>
                        <JobCard job={job} />
                      </div>
                    );
                  })}
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
    jobs: state.jobs
  };
};

export default connect(
  mapStateToProps,
  null
)(JobBoardModal);
