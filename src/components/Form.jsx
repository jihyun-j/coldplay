import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  usernameAction,
  titleAction,
  commentAction,
  memoryListAction,
  addNewMemoryAction,
} from "redux/modules/actionTypes";

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

function Form() {
  const dispatch = useDispatch();

  const username = useSelector((state) => {
    return state.home.username;
  });

  const title = useSelector((state) => {
    return state.home.title;
  });

  const comment = useSelector((state) => {
    return state.home.comment;
  });

  const memoryList = useSelector((state) => {
    return state.home.newMemory;
  });

  const selectedAlbum = useSelector((state) => {
    return state.home.selectedAlbum;
  });

  const onChangeUser = (e) => {
    const newUserName = e.target.value;
    dispatch(usernameAction(newUserName));
  };

  const onChangeTitle = (e) => {
    const newTitle = e.target.value;
    dispatch(titleAction(newTitle));
  };

  const onChangeComment = (e) => {
    const newComment = e.target.value;
    dispatch(commentAction(newComment));
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    const newMemory = {
      id: uuidv4(),
      username,
      title,
      comment,
      selectedAlbum,
    };

    dispatch(addNewMemoryAction(newMemory));

    // if (!username || !title || !comment) {
    //   return memoryList;
    // } else {
    //   return { ...memoryList, newMemory };
    // }
  };

  return (
    <div>
      <FormContainer onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="Your Name (Max 20 characters)"
          maxLength={20}
          value={username}
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
          value={comment}
          onChange={onChangeComment}
        />
        <button type="submit">등록</button>
      </FormContainer>
    </div>
  );
}

export default Form;
