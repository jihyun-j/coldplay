import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Cards = styled.ul`
  display: flex;
  border: 1px solid #fff;
  width: 300px;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`;

const SeeDetail = styled.button`
  cursor: pointer;
`;

function Card({ list, clickShowDetail }) {
  return (
    <CardContainer>
      {list.map((item) => {
        return (
          <Cards key={item.id} onClick={() => clickShowDetail(item.id)}>
            <p>{item.selectedAlbum}</p>
            <p>제목: {item.title}</p>
            <p>사용자: {item.userName}</p>
            <p>내용: {`${item.comments.substring(0, 35)}...`}</p>
            <Link to={`/detail/${item.id}`}>
              <SeeDetail>상세보기</SeeDetail>
            </Link>
          </Cards>
        );
      })}
    </CardContainer>
  );
}

export default Card;
