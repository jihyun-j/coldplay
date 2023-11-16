import Album from "components/Album";
import Header from "components/Header";
import Form from "components/Form";
import Card from "components/Card";
import React from "react";

function Home(props) {
  return (
    <>
      <Header></Header>

      <Album
        albumList={props.albumList}
        clickAlbum={props.getAlbumName}></Album>
      <Form
        userName={props.userName}
        title={props.title}
        onChangeUser={props.onChangeUser}
        onChangeTitle={props.onChangeTitle}
        onChangeComments={props.onChangeComments}
        clickSubmit={props.submitHandler}></Form>
      <Card
        list={props.memory}
        clickShowDetail={props.showDetailsHandler}></Card>
    </>
  );
}

export default Home;
