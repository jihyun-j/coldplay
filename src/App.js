import "reset.css";
import GlobalStyle from "components/GlobalStyle";
import Album from "components/Album";
import Form from "components/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "components/Card";
import Header from "components/Header";

function App() {
  const [memory, setMemory] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [showError, setShowError] = useState(false);

  //  사용자 이름, 제목, 내용, id, 선택한 앨범

  // onChange Handlers
  const onChangeUser = (e) => {
    setUserName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
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

  const onChangeEditTitle = (e) => {
    let changedTitle = e.target.value;

    setMemory({ title: changedTitle });
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    const newMemory = {
      id: uuidv4(),
      userName,
      password,
      title,
      comments,
      selectedAlbum,
    };

    if (!userName) {
      setShowError(true);
    } else {
      setMemory([...memory, newMemory]);
    }

    setUserName("");
    setTitle("");
    setComments("");
    setPassword("");
  };

  // Edit Handler
  const editComments = (id) => {
    setEditForm(true);
    setMemory([...memory]);
  };

  const updateHandler = () => {
    console.log("updated");
  };

  // Confirm Delete and Edit
  const confirmHandler = () => {};

  // Delete Handler
  const deleteComments = (id) => {
    const deletedComment = memory.filter((delComment) => delComment.id !== id);
    setMemory(deletedComment);
  };

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>

      {/* Header */}
      <Header></Header>

      {/* 앨범 선택 */}
      <Album album={getAlbumName}></Album>

      {/* 사용자 정보 및 코멘트 입력 폼 */}
      <Form
        userName={userName}
        password={password}
        title={title}
        comments={comments}
        onChangeUser={onChangeUser}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeComments={onChangeComments}
        clickSubmit={submitHandler}></Form>

      {/* Memories */}
      <Card list={memory} clickDelete={deleteComments} clickEdit={editComments}>
        What's your memory about?
      </Card>

      {/* Edit Comments */}
      {editForm
        ? memory.map((i) => {
            return (
              <form>
                <p>{i.id}</p>
                <input type="text" defaultValue={i.userName} />
                <input type="text" defaultValue={i.title} />
                <textarea type="text" defaultValue={i.comments} />
                <button onClick={updateHandler}></button>
              </form>
            );
          })
        : ""}

      {/* Error Msg */}
      {showError ? (
        <div>
          <p style={{ fontSize: "100px" }}>내용을 입력해 주세요</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
