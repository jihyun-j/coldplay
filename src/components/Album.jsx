import React from "react";
import styled from "styled-components";

const AlbumContainer = styled.form`
  display: flex;
  padding: 100px;
`;

const AlbumImage = styled.img`
  width: 150px;
  height: 150px;
`;

function Album({ album }) {
  return (
    <AlbumContainer>
      <label className="selectAlbum" for="album1">
        <input
          type="radio"
          value="A HEAD FULL OF DREAMS"
          id="album1"
          name="album1"
          onClick={album}
        />
        <AlbumImage
          src="https://upload.wikimedia.org/wikipedia/en/3/3d/Coldplay_-_A_Head_Full_of_Dreams.png"
          alt=""
        />
      </label>

      <label className="selectAlbum" for="album2">
        <input
          type="radio"
          value="GHOST STORIES"
          onClick={album}
          id="album2"
          name="album2"
        />
        <AlbumImage
          src="https://upload.wikimedia.org/wikipedia/en/8/8a/Coldplay_-_Ghost_Stories.png"
          alt=""
        />
      </label>

      <label className="selectAlbum" for="album3">
        <input
          type="radio"
          value="MYLO XYLOTO"
          onClick={album}
          id="album3"
          name="album3"
        />
        <AlbumImage
          src="https://upload.wikimedia.org/wikipedia/en/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png"
          alt=""
        />
      </label>

      <label className="selectAlbum" for="album4">
        <input
          type="radio"
          value="VIVA LA VIDA OR DEATH AND ALL HIS FRIENDS"
          onClick={album}
          id="album4"
          name="album4"
        />
        <AlbumImage
          src="https://upload.wikimedia.org/wikipedia/en/b/b2/Coldplay_-_Viva_la_Vida_or_Death_and_All_His_Friends.png"
          alt=""
        />
      </label>
      <label className="selectAlbum">
        <input
          type="radio"
          value="X&Y
        "
          onClick={album}
        />
        <AlbumImage
          src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Coldplay_X%26Y.svg/440px-Coldplay_X%26Y.svg.png"
          alt=""
        />
      </label>
      <label className="selectAlbum">
        <input
          type="radio"
          value="A RUSH OF BLOOD TO THE HEAD"
          onClick={album}
        />
        <AlbumImage
          src="https://upload.wikimedia.org/wikipedia/en/6/60/Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png"
          alt=""
        />
      </label>
      <label className="selectAlbum">
        <input type="radio" value="PARACHUTES" onClick={album} />
        <AlbumImage
          src="https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png"
          alt=""
        />
      </label>
    </AlbumContainer>
  );
}

export default Album;
