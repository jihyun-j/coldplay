import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";

const Router = ({
  albumList,
  clickAlbum,
  userName,
  title,
  comments,
  onChangeUser,
  onChangeTitle,
  onChangeComments,
  clickSubmit,
  list,
  clickShowDeleteConfirmation,
  showDeleteConfirmation,
  clickCancelDelete,
  clickConfirmDelete,
  clickEdit,
  isEditing,
  clickShowDetail,
  clickAlbumFilter,
  clickUpdateEdit,
  onChangeUpdateUserName,
}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              albumList={albumList}
              clickAlbum={clickAlbum}
              userName={userName}
              title={title}
              comments={comments}
              onChangeUser={onChangeUser}
              onChangeTitle={onChangeTitle}
              onChangeComments={onChangeComments}
              clickSubmit={clickSubmit}
              list={list}
              clickShowDetail={clickShowDetail}
              clickAlbumFilter={clickAlbumFilter}
            />
          }></Route>
        <Route
          path="detail/:id"
          element={
            <Detail
              userName={userName}
              title={title}
              comments={comments}
              list={list}
              showDeleteConfirmation={showDeleteConfirmation}
              clickShowDeleteConfirmation={clickShowDeleteConfirmation}
              clickCancelDelete={clickCancelDelete}
              clickConfirmDelete={clickConfirmDelete}
              clickEdit={clickEdit}
              isEditing={isEditing}
              clickUpdateEdit={clickUpdateEdit}
              onChangeUpdateUserName={onChangeUpdateUserName}
            />
          }></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
