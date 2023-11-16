import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const Input = styled.input`
  width: 400px;
  padding: 10px 8px;
  background-color: transparent;
  border: 2px solid transparent;
  outline: none;
  color: #fff;
  text-align: center;
  font-size: 20px;

  &:focus {
    border-bottom: 2px solid #fff;
  }

  &::placeholder {
    color: #c0c0c0;
  }
`;

const Textarea = styled.textarea`
  width: 400px;
  padding: 10px 8px;
  background-color: transparent;
  resize: none;
  color: #fff;
  text-align: center;
  height: 150px;
  border: none;
  outline: none;
  font-size: 20px;

  &::placeholder {
    color: #c0c0c0;
  }
`;

function Form({
  userName,
  title,
  comments,
  onChangeUser,
  onChangeTitle,
  onChangeComments,
  clickSubmit,
}) {
  return (
    <div>
      <FormContainer onClick={clickSubmit}>
        <Input
          type="text"
          placeholder="Your Name (Max 20 characters)"
          maxLength={20}
          value={userName}
          onChange={onChangeUser}
        />

        <Input
          type="text"
          placeholder="Give your memory a title (Max 40 characters)"
          className="title"
          maxLength={40}
          value={title}
          onChange={onChangeTitle}
        />

        <Textarea
          type="text"
          placeholder="Write your memory here... (Max 100 characters)"
          maxLength={100}
          value={comments}
          onChange={onChangeComments}
        />
        <button type="submit">등록</button>
      </FormContainer>
    </div>
  );
}

export default Form;
