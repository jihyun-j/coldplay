import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedAlbumAction } from "redux/modules/actionTypes";
import albumList from "shared/albumlist";
import styled from "styled-components";

const AlbumHeader = styled.div`
  font-size: 50px;
  text-align: center;
  margin-top: 100px;
`;

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 100px;
`;

const SelectAlbum = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid yellow;
`;

const AlbumInput = styled.input`
  display: none;
`;

const AlbumImage = styled.img`
  width: 150px;
  height: 150px;
`;

const AlbumTitle = styled.span`
  font-size: 10px;
  text-align: center;
`;

function Album() {
  const dispatch = useDispatch();

  const selectedAlbum = useSelector((state) => {
    return state.home.selectedAlbum;
  });

  const getAlbumName = (name) => {
    dispatch(selectedAlbumAction(name));
  };

  return (
    <div>
      <AlbumHeader>Select the album below</AlbumHeader>
      <AlbumContainer>
        {albumList.map((album) => {
          return (
            <SelectAlbum htmlFor={album.albumId} key={album.albumId}>
              <AlbumInput
                type="radio"
                id={album.albumId}
                name={album.albumId}
                value={album.title}
                onClick={() => getAlbumName(album.title)}
              />
              <AlbumImage src={album.image} alt={album.title} />
              <AlbumTitle>{album.title}</AlbumTitle>
            </SelectAlbum>
          );
        })}
      </AlbumContainer>
    </div>
  );
}

export default Album;
