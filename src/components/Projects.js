import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { connect } from "react-redux";
import { fetchLyrics } from "../actions";
import Lyrics from "./LyricsApp/Lyrics";
import LyricsChart from "./LyricsApp/LyricsChart";
import LyricsSearch from "./LyricsApp/LyricsSearch";
import AuthenticatorModal from "./AuthenticatorApp/AuthenticatorModal";
import JobBoardModal from "./JobBoardApp/JobBoardModal";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      lyrics: null
    };
    this.searchLyrics = this.searchLyrics.bind(this);
  }

  searchLyrics(e, artist, title) {
    e.preventDefault();
    if (artist && title) {
      artist = artist.replace(/\(/g, "%28").replace(/\)/g, "%29");
      title = title.replace(/\(/g, "%28").replace(/\)/g, "%29");
      this.props.fetchLyrics(artist, title);
    }
  }

  render() {
    AOS.init();
    return (
      <div className="container" style={{ borderRadius: "5px" }}>
        <div style={{ margin: "auto", width: "130px" }}>
          <h1>Projects</h1>
        </div>
        <div style={{ paddingBottom: "30px" }}>
          <hr
            style={{ width: "300px", marginLeft: "auto", marginRight: "auto" }}
          />
        </div>
        <div className="row featurette">
          <div className="col-md-6">
            <h2 data-aos="fade-right" className="featurette-heading">
              Lyric Search
              <span style={{ color: "#EB6361" }}> lyrics.ovh API/ Axios</span>
            </h2>
            <LyricsSearch searchLyrics={this.searchLyrics} />
          </div>
          <div className="col-md-6">
            <Lyrics lyrics={this.props.lyrics} />
          </div>
        </div>
        <div className="row featurette" style={{ paddingBottom: "20px" }}>
          <div className="col-md-6" />
          <div className="col-md-6">
            <h2 data-aos="fade-right" className="featurette-heading">
              Lyric Data
              <span style={{ color: "#EB6361" }}> ChartJS</span>
            </h2>
          </div>
          <div className="col-md-10 offset-md-2">
            <LyricsChart lyrics={this.props.lyrics} />
          </div>
        </div>
        <div className="row featurette" style={{ paddingBottom: "20px" }}>
          <div className="col-md-6">
            <h2 data-aos="fade-right" className="featurette-heading">
              Authenticator App
              <span style={{ color: "#EB6361" }}> Software Token</span>
            </h2>
            <AuthenticatorModal />
          </div>
        </div>
        <div className="row featurette" style={{ paddingBottom: "20px" }}>
          <div className="col-md-6" />
          <div className="col-md-6">
            <h2 data-aos="fade-right" className="featurette-heading">
              Job Board App
              <span style={{ color: "#EB6361" }}> Example</span>
            </h2>
            <JobBoardModal />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lyrics: state.lyrics
  };
};

export default connect(
  mapStateToProps,
  { fetchLyrics }
)(Projects);
