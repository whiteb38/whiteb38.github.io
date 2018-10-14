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
