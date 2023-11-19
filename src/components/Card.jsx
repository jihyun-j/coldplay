import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectedDetailAction } from "redux/modules/actionTypes";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  border: 1px solid #fff;
`;

const Cards = styled.ul`
  display: flex;
  border: 1px solid #fff;
  width: 300px;
  flex-direction: column;
`;

function Card() {
  const dispatch = useDispatch();

  const selectedDetail = useSelector((state) => {
    return state.home.selectedDetail;
  });

  const memoryList = useSelector((state) => {
    return state.home.memoryList;
  });

  console.log(memoryList);

  const showDetailsHandler = (id) => {
    dispatch(selectedDetailAction(id));
  };
  return (
    <CardContainer>
      {memoryList.map((item) => {
        return (
          <Cards key={item.id} onClick={() => showDetailsHandler(item.id)}>
            <Link to={`/detail/${item.id}`}>상세보기</Link>
            <p>{item.title}</p>
            <p>{item.userName}</p>
            <p>{`${item.comments.substring(0, 35)}...`}</p>
            <p>{item.selectedAlbum}</p>
          </Cards>
        );
      })}
    </CardContainer>
  );
}

export default Card;
