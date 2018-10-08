import axios from "axios";

export const FETCH_LYRICS = "FETCH_LYRICS";

export const fetchLyrics = (artist, title) => dispatch => {
  axios
    .get(`https://api.lyrics.ovh/v1/${artist}/${title}`, {
      crossdomain: true
    })
    .then(response => {
      const lyrics = response.data.lyrics;
      dispatch({
        type: FETCH_LYRICS,
        lyrics
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_LYRICS,
        lyrics: "Artist or Song could not be found"
      });
    });
};
