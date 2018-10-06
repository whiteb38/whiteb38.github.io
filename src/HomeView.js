import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Practice from "./Practice";
import Blurb from "./Blurb";
import Footer from "./Footer";
import Contact from "./Contact";
import "aos/dist/aos.css";
import AOS from "aos";

class HomeView extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "#f5f5f5",
            maxWidth: "100%",
            overflowX: "hidden"
          }}
        >
          <Header />
          <About />
          <div className="container" style={{ padding: "20px" }}>
            <Experience />
          </div>
          <div style={{ paddingTop: "20px", background: "white" }}>
            <Projects />
          </div>
          <Practice />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}
export default HomeView;
