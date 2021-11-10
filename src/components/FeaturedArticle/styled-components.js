import styled from "styled-components";

export const FeaturedArticleContainer = styled.div`
  width: 90%;
  height: 400px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  margin: auto;
  padding: 40px 0;
  display: flex;
`;

export const FeaturedImg = styled.img`
  /* width: 500px; */
  height: 320px;
  flex: 1;
  margin-right: 30px;
`;

export const FeaturedContent = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ContentText = styled.p`
  margin-top: 20px;
`;

export const ReadMore = styled.p`
  font-size: 1.1em;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
