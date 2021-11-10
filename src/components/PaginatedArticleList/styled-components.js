import styled from "styled-components";

export const ArticleListContainer = styled.div`
  background: #fdece1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* height: 100vh; */
  width: 100%;
`;

export const LoadMoreBtn = styled.button`
  background: transparent;
  border-radius: 50px;
  border: 2px solid black;
  /* padding: 10px 40px; */
  width: 200px;
  height: 60px;
  cursor: pointer;
  transition: all 0.7s ease;

  &:hover {
    background: black;
    color: white;
  }
`;
