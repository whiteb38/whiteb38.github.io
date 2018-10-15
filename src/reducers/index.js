import { FETCH_LYRICS, UPDATE_AUTH, ADD_NEW_AUTH } from "../actions";

const initialState = {
  lyrics: null,
  authCodes: [
    { name: "Google", authCode: null },
    { name: "Yahoo", authCode: null }
  ]
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
    case ADD_NEW_AUTH:
      return {
        ...state,
        authCodes: insertItem(state.authCodes, action)
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

function insertItem(authCodes, action) {
  let newArray = authCodes.slice();
  let newIndex = newArray.length;
  let newItem = { name: action.app, authCode: null };
  newArray.splice(newIndex, 0, newItem);
  return newArray;
}

export default lyricsApp;
