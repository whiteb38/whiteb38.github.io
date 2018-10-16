"use strict";
import React from "react";

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

export default LyricsSearch;
