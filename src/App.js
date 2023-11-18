import "reset.css";
import GlobalStyle from "components/GlobalStyle";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Router from "shared/Router";
import albumList from "shared/albumlist";

function App() {
  const [memory, setMemory] = useState([]);
  const [selectedDetail, setSelectedDetail] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState();
  const [userName, setUserName] = useState("");
  const [updateUserName, setUpdateUserName] = useState("");
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // onChange Handlers
  const onChangeUser = (e) => {
    setUserName(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeComments = (e) => {
    setComments(e.target.value);
  };

  const getAlbumName = (e) => {
    setSelectedAlbum(e.target.value);
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    const newMemory = {
      id: uuidv4(),
      userName,
      title,
      comments,
      selectedAlbum,
    };

    if (!userName || !title || !comments) {
      setMemory([...memory]);
    } else {
      setMemory([...memory, newMemory]);
      setUserName("");
      setTitle("");
      setComments("");
    }
  };

  // Album Filter
  const filterAlbumHandler = (selAlbum) => {
    const filteredAlbum = memory.filter(
      (album) => album.selectedAlbum === selAlbum.innerHTML
    );
  };

  // Show Deatils
  const showDetailsHandler = (id) => {
    const showDetail = memory.filter((detail) => detail.id === id);
    setSelectedDetail(showDetail);
  };

  // Show Delete Confirmation
  const showDeleteConfirmation = () => {
    setShowDeleteConfirm(true);
  };

  // Delete Confirmation
  const confirmDeleteHandler = (id) => {
    const deletedComment = memory.filter((delComment) => delComment.id !== id);
    setMemory(deletedComment);
    setShowDeleteConfirm(false);
    console.log(id);
  };

  // Cancel Delete Comments
  const cancelDeleteHandler = () => {
    setShowDeleteConfirm(false);
  };

  // Show Editing Form
  const showEditingForm = () => {
    setIsEditing(true);
  };

  // onChange Update UserName
  const onChangeUpdateUserName = (e) => {};

  // Update Editing
  const updateEditing = (e) => {
    e.preventDefault();
  };

  // Cancel Editing
  const cancelEditHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Router
        albumList={albumList}
        clickAlbum={getAlbumName}
        userName={userName}
        title={title}
        comments={comments}
        onChangeUser={onChangeUser}
        onChangeTitle={onChangeTitle}
        onChangeComments={onChangeComments}
        clickSubmit={submitHandler}
        list={memory}
        clickShowDetail={showDetailsHandler}
        clickShowDeleteConfirmation={showDeleteConfirmation}
        showDeleteConfirmation={showDeleteConfirm}
        clickConfirmDelete={confirmDeleteHandler}
        clickCancelDelete={cancelDeleteHandler}
        clickEdit={showEditingForm}
        isEditing={isEditing}
        clickAlbumFilter={filterAlbumHandler}
        clickDetails={selectedDetail}
        onChangeUpdateUserName={onChangeUpdateUserName}></Router>
    </div>
  );
}

export default App;
