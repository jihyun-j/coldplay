import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              albumList={props.albumList}
              clickAlbum={props.getAlbumName}
              userName={props.userName}
              title={props.title}
              onChangeUser={props.onChangeUser}
              onChangeTitle={props.onChangeTitle}
              onChangeComments={props.onChangeComments}
              clickSubmit={props.submitHandler}
              list={props.memory}
              clickShowDetail={props.showDetailsHandler}
            />
          }></Route>
        <Route path="detail" element={<Detail />}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
