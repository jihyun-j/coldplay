import Album from "components/Album";
import Header from "components/Header";
import Form from "components/Form";
import Card from "components/Card";
import AlbumFilter from "components/AlbumFilter";

function Home() {
  return (
    <>
      <Header></Header>
      <Album></Album>
      <Form></Form>
      {/* <AlbumFilter></AlbumFilter> */}
      <Card></Card>
    </>
  );
}

export default Home;
