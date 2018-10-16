"use strict";

import React from "react";

class JobCard extends React.Component {
  constructor() {
    super();
    this.state = { flipCard: false };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    let flipCardState = this.state.flipCard;
    this.setState({ flipCard: !flipCardState });
  }

  render() {
    let cardInfo;
    let cardButton;
    if (this.state.flipCard) {
      cardInfo = (
        <p className="card-text" style={{ fontSize: "12px" }}>
          {this.props.job.companyDescription}
        </p>
      );
      cardButton = "Show Description";
    } else {
      cardInfo = (
        <p className="card-text" style={{ fontSize: "12px" }}>
          {this.props.job.details}
        </p>
      );
      cardButton = "Show Company Info";
    }
    return (
      <div
        className="card"
        style={{ width: "18rem", margin: "auto", marginBottom: "10px" }}
      >
        <div className="card-body">
          <h5 className="card-title">{this.props.job.title}</h5>
          <p className="card-text" style={{ fontSize: "15px" }}>
            <span className="fa fa-building" style={{ paddingRight: "5px" }} />
            {this.props.job.company}
            <span
              className="fa fa-map-marker"
              style={{ paddingLeft: "10px", paddingRight: "5px" }}
            />
            {this.props.job.location}
          </p>
          {cardInfo}
          <a onClick={this.flipCard} className="btn btn-primary">
            <span style={{ color: "white" }}>{cardButton}</span>
          </a>
        </div>
      </div>
    );
  }
}
export default JobCard;
