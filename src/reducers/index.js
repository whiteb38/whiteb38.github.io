import { FETCH_LYRICS, UPDATE_AUTH } from "../actions";

const initialState = {
  lyrics: null,
  authCodes: [{ name: "Google", authCode: null }]
};

function lyricsApp(state = initialState, action) {
  switch (action.type) {
    case FETCH_LYRICS:
      return Object.assign({}, state, {
        lyrics: action.lyrics
      });
    case UPDATE_AUTH:
      return {
        ...state,
        authCodes: updateAuthCodes(state.authCodes, action)
      };
    default:
      return state;
  }
}

function updateAuthCodes(authCodes, action) {
  return authCodes.map((item, index) => {
    if (item.name !== action.app) {
      return item;
    }
    return {
      ...item,
      authCode: action.authCode
    };
  });
}

export default lyricsApp;
