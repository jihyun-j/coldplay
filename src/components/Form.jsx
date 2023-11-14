import React from "react";
import styled from "styled-components";

function Form({
  userName,
  password,
  title,
  comments,
  onChangeUser,
  onChangePassword,
  onChangeTitle,
  onChangeComments,
  clickSubmit,
}) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="사용자이름"
          value={userName}
          onChange={onChangeUser}
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <input
          type="text"
          placeholder="추억에 대한 제목을 적어주세요."
          className="title"
          value={title}
          onChange={onChangeTitle}
        />
        <textarea
          type="text"
          placeholder="앨범에 대한 추억을 적어주세요."
          value={comments}
          onChange={onChangeComments}
        />
        <button onClick={clickSubmit}>등록</button>
      </form>
    </div>
  );
}

export default Form;
