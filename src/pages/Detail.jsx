import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const BackHome = styled.button`
  cursor: pointer;
  margin: 20px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  border: 2px solid #ffef66;
  margin: 100px auto;
  padding: 20px;
  border-radius: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const DeleteComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 500px;
  height: 30px;
  padding-left: 5px;
`;

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
    <>
      <Link to="/">
        <BackHome>홈으로</BackHome>{" "}
      </Link>

      <DetailContainer>
        {selectedComments && (
          <>
            <p>사용자: {selectedComments.userName}</p>
            <p>제목: {selectedComments.title}</p>
            <p>내용: {selectedComments.comments}</p>
          </>
        )}
        <ButtonContainer>
          <button onClick={clickShowDeleteConfirmation}>삭제</button>
          <button onClick={() => clickEdit(paramsID)}>수정</button>
        </ButtonContainer>
      </DetailContainer>

      <DeleteComment>
        {showDeleteConfirmation ? (
          <div>
            <h3>삭제하시겠습니까?</h3>
            <ButtonContainer>
              <Link to="/" onClick={() => clickConfirmDelete(paramsID)}>
                <button>네</button>
              </Link>

              <button onClick={clickCancelDelete}>아니오</button>
            </ButtonContainer>
          </div>
        ) : null}
      </DeleteComment>

      <FormContainer>
        {isEditing ? (
          <Form>
            <Input
              type="text"
              placeholder="Your Name (Max 20 characters)"
              maxLength={20}
              value={updateUserName}
              onChange={onChangeUpdateUserName}
            />

            <Input
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

            <ButtonContainer>
              <button onClick={updateEditing}>등록</button>
              <button onClick={clickEditCancel}>취소</button>
            </ButtonContainer>
          </Form>
        ) : null}
      </FormContainer>
    </>
  );
}

export default Detail;
