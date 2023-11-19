// Home
export const USER_NAME = "USER_NAME";
export const TITLE = "TITLE";
export const COMMENT = "COMMENT";
export const MEMORY_LIST = "MEMORY_LIST";
export const ADD_MEMORY = "ADD_MEMORY";
export const ALBUM_LIST = "ALBUM_LIST";
export const SELECTED_DETAIL = "SELECTED_DETAIL";
export const SELECTED_ALBUM = "SELECTED_ALBUM";

// Detail
export const SHOW_DELETE_CONFIRM = "SHOW_DELETE_CONFIRM";
export const IS_EDITING = "IS_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const usernameAction = (username) => {
  return {
    type: USER_NAME,
    payload: username,
  };
};

export const titleAction = (title) => {
  return {
    type: TITLE,
    payload: title,
  };
};

export const commentAction = (comment) => {
  return {
    type: COMMENT,
    payload: comment,
  };
};

export const memoryListAction = (memory) => {
  return {
    type: MEMORY_LIST,
    payload: memory,
  };
};

export const addNewMemoryAction = (newMemory) => {
  return {
    type: ADD_MEMORY,
    payload: newMemory,
  };
};

export const albumListAction = (album) => {
  return {
    type: ALBUM_LIST,
    payload: album,
  };
};

export const selectedDetailAction = (detail) => {
  return {
    type: SELECTED_DETAIL,
    payload: detail,
  };
};

export const selectedAlbumAction = (album) => {
  return {
    type: SELECTED_ALBUM,
    payload: album,
  };
};

export const showDeleteConfirmAction = (confirmMsg) => {
  return {
    type: SHOW_DELETE_CONFIRM,
    payload: confirmMsg,
  };
};

export const isEditingAction = (editing) => {
  return {
    type: IS_EDITING,
    payload: editing,
  };
};

export const updateTitleAction = (updateTitle) => {
  return {
    type: UPDATE_TITLE,
    payload: updateTitle,
  };
};

export const updateUserNameAction = (updateUserName) => {
  return {
    type: UPDATE_USER_NAME,
    payload: updateUserName,
  };
};

export const updateCommentAction = (updateComment) => {
  return {
    type: UPDATE_COMMENT,
    payload: updateComment,
  };
};
