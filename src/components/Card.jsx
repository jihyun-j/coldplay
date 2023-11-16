import React from "react";
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

function Card({ list, clickShowDetail }) {
  return (
    <CardContainer>
      {list &&
        list.map((item) => {
          return (
            <Cards key={item.id} onClick={() => clickShowDetail(item.id)}>
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
