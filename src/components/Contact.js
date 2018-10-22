import React from "react";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          padding: "20px",
          background: "#c96567"
        }}
      >
        <div style={{ margin: "auto", width: "142px" }}>
          <h1 style={{ color: "white" }}>Contact</h1>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <hr className="header_underline" />
        </div>
        <div style={{ margin: "auto", width: "225px", paddingBottom: "10px" }}>
          <a
            className="projects-subtext"
            href="mailto:whiteb38@gmail.com"
            data-rel="external"
            style={{ fontSize: "25px" }}
          >
            whiteb38@gmail.com
          </a>
          <div style={{ width: "100px", margin: "auto", paddingTop: "20px" }}>
            <a
              href="https://www.github.com/whiteb38"
              target="_blank"
              style={{ paddingRight: "10px" }}
            >
              <img
                id="about"
                src="../extra/if_github_1379461.png"
                style={{ width: "45px", height: "auto" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/brendon-white-55896b58/"
              target="_blank"
            >
              <img
                id="about"
                src="../extra/if_linkedin_1379481.png"
                style={{ width: "45px", height: "auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
