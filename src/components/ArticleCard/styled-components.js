import styled from "styled-components";

export const ArticleBox = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 520px;
  height: 500px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid black;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ContentDiv = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
    margin: auto;
  }
`;

export const ArticleImg = styled.img`
  width: 518px;
  height: 280px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h1`
  line-height: 1.1em;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 25px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Category = styled.p`
  font-size: 1.1em;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 50px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
