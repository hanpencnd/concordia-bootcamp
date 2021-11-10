import styled from "styled-components";

export const ArticleBox = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 520px;
  height: 450px;
  margin: 15px 10px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid black;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ContentDiv = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40%;

  @media (max-width: 768px) {
    height: auto;
    margin: auto;
  }
`;

export const ArticleImg = styled.img`
  width: 99.9%;
  height: 60%;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Title = styled.h1`
  line-height: 1.1em;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Category = styled.p`
  font-size: 1.1em;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 50px;
  }
`;
