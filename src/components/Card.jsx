import React from "react";

function Card({ list, clickDelete, clickEdit }) {
  return (
    <div>
      {list.map((item) => {
        return (
          <div className="container" key={item.id}>
            <div>
              <img src="#" alt="" />
              <p>{item.userName}</p>
              <p>{item.password}</p>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.comments}</p>
              <p>{item.selectedAlbum}</p>
              <button onClick={() => clickDelete(item.id)}>삭제</button>
              <button onClick={() => clickEdit(item.id)}>수정</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
