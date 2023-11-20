import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0;
  gap: 10px;
`;

const FilterButton = styled.button`
  width: 150px;
  border: 2px solid #ffef66;
  border-radius: 10px;
  background-color: transparent;
  color: #ffef66;
`;

function AlbumFilter({ albumList, clickAlbumFilter }) {
  return (
    <FilterContainer>
      {albumList.map((album) => {
        return (
          <FilterButton onClick={clickAlbumFilter} key={album.albumId}>
            {album.title}
          </FilterButton>
        );
      })}
    </FilterContainer>
  );
}

export default AlbumFilter;
