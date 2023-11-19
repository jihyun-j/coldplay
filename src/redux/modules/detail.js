import albumList from "shared/albumlist";
import { ALBUM_LIST } from "./actionTypes";

// 초기값
const initialState = {
  album: [],
};

const album = (state = initialState, action) => {
  switch (action.type) {
    case ALBUM_LIST:
      return {
        album: [...albumList],
      };
    default:
      return state;
  }
};

export default album;
