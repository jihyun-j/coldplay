import React from "react";
import { Link, useParams } from "react-router-dom";

function Detail({
  list,
  showDeleteConfirmation,
  clickShowDeleteConfirmation,
  clickCancelDelete,
  clickConfirmDelete,
  clickEdit,
  isEditing,
  onChangeUpdateUserName,
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
          <div>{selectedComments.title}</div>
          <div>{selectedComments.userName}</div>
        </>
      )}

      <button onClick={clickShowDeleteConfirmation}>삭제</button>
      <button onClick={clickEdit}>수정</button>

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
            value={selectedComments.userName}
          />

          <input
            type="text"
            placeholder="Give your memory a title (Max 40 characters)"
            className="title"
            maxLength={40}
            value={selectedComments.title}
          />

          <textarea
            type="text"
            placeholder="Write your memory here... (Max 100 characters)"
            maxLength={100}
            value={selectedComments.comments}
          />
          <button type="submit">등록</button>
        </form>
      ) : null}
    </div>
  );
}

export default Detail;
