import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { connect } from "react-redux";
import { fetchLyrics } from "./actions";
import Lyrics from "./LyricsApp/Lyrics";
import LyricsChart from "./LyricsApp/LyricsChart";
import AuthenticatorModal from "./AuthenticatorModal";

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
              <span style={{ color: "#EB6361" }}> One-time Password</span>
            </h2>
            <AuthenticatorModal />
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

class LyricsSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: null,
      title: null
    };
    this.setArtist = this.setArtist.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  setArtist(e) {
    let artist = e.target.value;
    this.setState({ artist });
  }

  setTitle(e) {
    let title = e.target.value;
    this.setState({ title });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="artist">Artist : </label>
          <input
            type="text"
            className="form-control"
            id="artist"
            placeholder="Enter an artist or band name"
            onChange={this.setArtist}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter a song title"
            onChange={this.setTitle}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={e =>
            this.props.searchLyrics(e, this.state.artist, this.state.title)
          }
        >
          Search
        </button>
      </form>
    );
  }
}
