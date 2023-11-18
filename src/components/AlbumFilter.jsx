import React from "react";

function AlbumFilter({ albumList, clickAlbumFilter }) {
  return (
    <div>
      {albumList.map((album) => {
        return (
          <button onClick={clickAlbumFilter} key={album.albumId}>
            {album.title}
          </button>
        );
      })}
    </div>
  );
}

export default AlbumFilter;
