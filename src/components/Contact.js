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
          background: "white"
        }}
      >
        <div style={{ margin: "auto", width: "130px" }}>
          <h1>Contact</h1>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <hr
            style={{ width: "300px", marginLeft: "auto", marginRight: "auto" }}
          />
        </div>
        <div style={{ margin: "auto", width: "225px", paddingBottom: "10px" }}>
          <a
            href="mailto:whiteb38@gmail.com"
            data-rel="external"
            style={{ color: "black", fontSize: "25px" }}
          >
            whiteb38@gmail.com
          </a>
          <div style={{ width: "100px", margin: "auto" }}>
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
