import "reset.css";
import GlobalStyle from "components/GlobalStyle";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Router from "shared/Router";

function App() {
  const [memory, setMemory] = useState([]);
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [comments, setComments] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState();
  const [editForm, setEditForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState([]);

  const albumList = [
    {
      albumId: "album1",
      title: "A HEAD FULL OF DREAMS",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/3d/Coldplay_-_A_Head_Full_of_Dreams.png",
    },
    {
      albumId: "album2",
      title: "GHOST STORIES",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8a/Coldplay_-_Ghost_Stories.png",
    },
    {
      albumId: "album3",
      title: "MYLO XYLOTO",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png",
    },
    {
      albumId: "album4",
      title: "VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/b2/Coldplay_-_Viva_la_Vida_or_Death_and_All_His_Friends.png",
    },
    {
      albumId: "album5",
      title: "X&Y",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Coldplay_X%26Y.svg/440px-Coldplay_X%26Y.svg.png",
    },
    {
      albumId: "album6",
      title: "A RUSH OF BLOOD TO THE HEAD",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/60/Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png",
    },
    {
      albumId: "album7",
      title: "PARACHUTES",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png",
    },
  ];

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
      (album) => album.selectedAlbum === selAlbum
    );
    setMemory([...filteredAlbum]);
  };

  // show details
  const showDetailsHandler = (id) => {
    const showDetail = memory.filter((detail) => detail.id === id);
    setShowDetails(true);
    setSelectedDetail(showDetail);
  };

  // Edit Handler
  const editComments = (id) => {
    setEditForm(true);
    setMemory([...memory]);
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

      <Router
        albumList={albumList}
        clickAlbum={getAlbumName}
        userName={userName}
        title={title}
        onChangeUser={onChangeUser}
        onChangeTitle={onChangeTitle}
        onChangeComments={onChangeComments}
        clickSubmit={submitHandler}
        list={memory}
        clickShowDetail={showDetailsHandler}></Router>

      {/* Album Filter */}
      {albumList.map((album) => {
        return (
          <button
            onClick={() => filterAlbumHandler(album.title)}
            key={album.albumId}>
            {album.title}
          </button>
        );
      })}

      {/* Details */}

      {showDetails
        ? selectedDetail.map((item) => {
            return (
              <div>
                <p>{item.userName}</p>
                <p>{item.title}</p>
                <p>{item.comments}</p>
                <button onClick={() => deleteComments(item.id)}>삭제</button>
                <button>수정</button>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default App;

{
  /* 앨범 선택 */
}

{
  /* <Album albumList={albumList} clickAlbum={getAlbumName}>
        Select the album below
      </Album> */
}

{
  /* 사용자 정보 및 코멘트 입력 폼 */
}
{
  /* <Form
        userName={userName}
        title={title}
        comments={comments}
        onChangeUser={onChangeUser}
        onChangeTitle={onChangeTitle}
        onChangeComments={onChangeComments}
        clickSubmit={submitHandler}></Form> */
}
{
  /* Memories */
}
{
  /* <Card
        list={memory}
        clickDelete={deleteComments}
        clickEdit={editComments}
        clickShowDetail={showDetailsHandler}></Card> */
}
