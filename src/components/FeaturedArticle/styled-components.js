import styled from "styled-components";

export const FeaturedArticleContainer = styled.div`
  max-width: 1100px;
  height: 400px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  margin: auto;
  padding: 40px 0;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    margin: auto;
  }
`;

export const FeaturedImg = styled.img`
  height: 320px;
  /* width: 530px; */
  width: 50%;
  height: auto;
  aspect-ratio: inherit;
  margin-right: 30px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const FeaturedContent = styled.div`
  flex-flow: 1;
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
