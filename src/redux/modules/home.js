import {
  USER_NAME,
  TITLE,
  COMMENT,
  MEMORY_LIST,
  ADD_MEMORY,
  ALBUM_LIST,
  SELECTED_DETAIL,
  SELECTED_ALBUM,
} from "./actionTypes";

// 초기값
const initialState = {
  username: "",
  title: "",
  comment: "",
  selectedAlbum: "",
  memoryList: [],
  selectedDetail: [],
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        username: action.payload,
      };
    case TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case SELECTED_ALBUM:
      return {
        ...state,
        selectedAlbum: action.payload,
      };
    case MEMORY_LIST:
      return {
        ...state,
        memoryList: action.payload,
      };
    case ADD_MEMORY:
      return {
        ...state,
        memoryList: [...state.memoryList, action.payload],
      };
    case SELECTED_DETAIL:
      return {
        ...state,
        selectedDetail: action.payload,
      };
    default:
      return state;
  }
};

export default home;
