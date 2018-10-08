import { FETCH_LYRICS } from "../actions";

const initialState = {
  lyrics: null
};

function lyricsApp(state = initialState, action) {
  switch (action.type) {
    case FETCH_LYRICS:
      return Object.assign({}, state, {
        lyrics: action.lyrics
      });
    default:
      return state;
  }
}

export default lyricsApp;
