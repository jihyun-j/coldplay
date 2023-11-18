import Album from "components/Album";
import Header from "components/Header";
import Form from "components/Form";
import Card from "components/Card";
import React, { useContext } from "react";
import AlbumFilter from "components/AlbumFilter";
import { GlobalContext } from "context/GlobalContext";

function Home() {
  const data = useContext(GlobalContext);

  return (
    <>
      <Header></Header>

      <Album albumList={data.albumList} clickAlbum={data.clickAlbum}>
        Select the album below
      </Album>
      <Form
        userName={data.userName}
        title={data.title}
        comments={data.comments}
        onChangeUser={data.onChangeUser}
        onChangeTitle={data.onChangeTitle}
        onChangeComments={data.onChangeComments}
        clickSubmit={data.clickSubmit}></Form>

      <AlbumFilter
        albumList={data.albumList}
        clickAlbumFilter={data.clickAlbumFilter}></AlbumFilter>

      <Card
        list={data.list}
        clickDelete={data.clickDelete}
        clickEdit={data.clickEdit}
        clickShowDetail={data.clickShowDetail}></Card>
    </>
  );
}

export default Home;
