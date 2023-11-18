import Album from "components/Album";
import Header from "components/Header";
import Form from "components/Form";
import Card from "components/Card";
import React from "react";
import AlbumFilter from "components/AlbumFilter";

function Home({
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
  clickDelete,
  clickEdit,
  clickShowDetail,
  clickAlbumFilter,
}) {
  return (
    <>
      <Header></Header>

      <Album albumList={albumList} clickAlbum={clickAlbum}>
        Select the album below
      </Album>
      <Form
        userName={userName}
        title={title}
        comments={comments}
        onChangeUser={onChangeUser}
        onChangeTitle={onChangeTitle}
        onChangeComments={onChangeComments}
        clickSubmit={clickSubmit}></Form>

      <AlbumFilter
        albumList={albumList}
        clickAlbumFilter={clickAlbumFilter}></AlbumFilter>

      <Card
        list={list}
        clickDelete={clickDelete}
        clickEdit={clickEdit}
        clickShowDetail={clickShowDetail}></Card>
    </>
  );
}

export default Home;
