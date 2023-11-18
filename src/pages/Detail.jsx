import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail({
  list,
  showDeleteConfirmation,
  clickShowDeleteConfirmation,
  clickCancelDelete,
  clickConfirmDelete,
  clickEdit,
  isEditing,
  clickEditCancel,
  updateUserName,
  onChangeUpdateUserName,
  updateTitle,
  onChangeUpdateTitle,
  updateComments,
  onChangeUpdateComments,
  updateEditing,
}) {
  const params = useParams();
  const paramsID = params.id;
  const selectedComments = list.find((item) => String(item.id) === paramsID);

  return (
    <div>
      <Link to="/">홈으로</Link>

      {selectedComments && (
        <>
          <div>{selectedComments.id}</div>
          <div>{selectedComments.userName}</div>
          <div>{selectedComments.title}</div>
          <div>{selectedComments.comments}</div>
        </>
      )}

      <button onClick={clickShowDeleteConfirmation}>삭제</button>
      <button onClick={() => clickEdit(paramsID)}>수정</button>

      {showDeleteConfirmation ? (
        <div>
          <div>삭제?</div>

          <Link to="/" onClick={() => clickConfirmDelete(paramsID)}>
            yes
          </Link>

          <button onClick={clickCancelDelete}>no</button>
        </div>
      ) : null}

      {isEditing ? (
        <form>
          <input
            type="text"
            placeholder="Your Name (Max 20 characters)"
            maxLength={20}
            value={updateUserName}
            onChange={onChangeUpdateUserName}
          />

          <input
            type="text"
            placeholder="Give your memory a title (Max 40 characters)"
            className="title"
            maxLength={40}
            value={updateTitle}
            onChange={onChangeUpdateTitle}
          />

          <textarea
            type="text"
            placeholder="Write your memory here... (Max 100 characters)"
            maxLength={100}
            value={updateComments}
            onChange={onChangeUpdateComments}
          />
          <button onClick={updateEditing}>등록</button>
          <button onClick={clickEditCancel}>취소</button>
        </form>
      ) : null}
    </div>
  );
}

export default Detail;
