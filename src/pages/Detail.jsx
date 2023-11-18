import { GlobalContext } from "context/GlobalContext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const data = useContext(GlobalContext);
  const list = data.list;
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

      <button onClick={data.clickShowDeleteConfirmation}>삭제</button>
      <button onClick={() => data.clickEdit(paramsID)}>수정</button>

      {data.showDeleteConfirmation ? (
        <div>
          <div>삭제?</div>

          <Link to="/" onClick={() => data.clickConfirmDelete(paramsID)}>
            yes
          </Link>

          <button onClick={data.clickCancelDelete}>no</button>
        </div>
      ) : null}

      {data.isEditing ? (
        <form>
          <input
            type="text"
            placeholder="Your Name (Max 20 characters)"
            maxLength={20}
            value={data.updateUserName}
            onChange={data.onChangeUpdateUserName}
          />

          <input
            type="text"
            placeholder="Give your memory a title (Max 40 characters)"
            className="title"
            maxLength={40}
            value={data.updateTitle}
            onChange={data.onChangeUpdateTitle}
          />

          <textarea
            type="text"
            placeholder="Write your memory here... (Max 100 characters)"
            maxLength={100}
            value={data.updateComments}
            onChange={data.onChangeUpdateComments}
          />
          <button onClick={data.updateEditing}>등록</button>
          <button onClick={data.clickEditCancel}>취소</button>
        </form>
      ) : null}
    </div>
  );
}

export default Detail;
