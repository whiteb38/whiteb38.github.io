import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Practice from "./Practice";
import Footer from "./Footer";
import Contact from "./Contact";

class HomeView extends React.Component {
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
          <Header />
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
                  </a>
                </li>
                <li className="social-item">
                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/brendon-white-55896b58/"
                    target="_blank"
                  >
                    <img id="linkedIn" src="../extra/linkedin-4-24.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <main>
            <div
              className="container"
              style={{ padding: "20px 50px 20px 50px", marginBottom: "200px" }}
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
              <Experience />
            </div>
            <div
              className="container"
              style={{
                padding: "20px 50px 20px 50px",
                marginTop: "200px",
                marginBottom: "200px"
              }}
            >
              <Projects />
            </div>
            <div
              className="container"
              style={{
                padding: "20px 50px 20px 50px",
                marginTop: "200px",
                marginBottom: "200px"
              }}
            >
              <Practice />
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
