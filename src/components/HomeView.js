import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Practice from "./Practice";
import Footer from "./Footer";
import Contact from "./Contact";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.experienceRef = React.createRef();
    this.projectsRef = React.createRef();
    this.frameWorksRef = React.createRef();
    this.scrollToExperience = this.scrollToExperience.bind(this);
    this.scrollToProjects = this.scrollToProjects.bind(this);
    this.scrollToFrameworks = this.scrollToFrameworks.bind(this);
  }

  scrollToExperience() {
    this.experienceRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  scrollToProjects() {
    this.projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  scrollToFrameworks() {
    this.frameWorksRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#c96567",
            maxWidth: "100%",
            overflowX: "hidden"
          }}
        >
          <Header
            scrollToExperience={this.scrollToExperience}
            scrollToProjects={this.scrollToProjects}
            scrollToFrameworks={this.scrollToFrameworks}
          />
          <div className="social">
            <div>
              <ul className="social-list">
                <li className="social-item">
                  <a
                    className="social-link"
                    href="https://www.github.com/whiteb38"
                    target="_blank"
                  >
                    <img
                      className="social-item-github"
                      id="github"
                      src="../extra/GitHub-Mark-Light-32px.png"
                    />
                    <div className="overlay" />
                  </a>
                </li>
                <li className="social-item" style={{ marginBottom: "20px" }}>
                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/brendon-white-55896b58/"
                    target="_blank"
                  >
                    <img id="linkedIn" src="../extra/linkedin-4-24.png" />
                    <div className="overlay" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="email">
            <div>
              <div className="emailLinkWrapper">
                <a
                  className="emailLink"
                  href="mailto:whiteb38@gmail.com"
                  target="_blank"
                >
                  whiteb38@gmail.com
                </a>
              </div>
            </div>
          </div>
          <main>
            <div
              className="container"
              style={{ padding: "20px 50px 20px 50px" }}
            >
              <About />
            </div>
            <div
              className="container"
              style={{
                padding: "20px",
                marginTop: "200px",
                marginBottom: "200px"
              }}
            >
              <Experience experienceRef={this.experienceRef} />
            </div>
            <div
              className="container"
              style={{
                padding: "20px 50px 20px 50px",
                marginTop: "200px",
                marginBottom: "200px"
              }}
            >
              <Projects projectsRef={this.projectsRef} />
            </div>
            <div
              className="container"
              style={{
                padding: "20px 50px 20px 50px",
                marginTop: "200px",
                marginBottom: "200px"
              }}
            >
              <Practice frameWorksRef={this.frameWorksRef} />
            </div>
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}
export default HomeView;
