"use strict";

import React from "react";

class Lyrics extends React.Component {
  constructor() {
    super();
    this.state = {
      lyrics: null
    };
  }

  render() {
    if (!this.props.lyrics) {
      return <div />;
    }
    let formattedLyrics = this.props.lyrics.replace(/\.(\s+)[A-Z]/g, "/n");
    formattedLyrics = formattedLyrics.substr(0, 200) + "...";
    return (
      <container>
        <div
          style={{
            width: "500px",
            height: "200px",
            whiteSpace: "pre-line",
            overflowY: "scroll"
          }}
        >
          {formattedLyrics}
          <p style={{ fontSize: "10px" }}>
            *Only displaying part of the lyrics to prevent any copyright
            infringements <br />
            This is used for educational purposes only
          </p>
        </div>
      </container>
    );
  }
}

export default Lyrics;
