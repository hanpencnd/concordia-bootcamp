import React, { useState } from "react";
import { useStore } from "../../contexts/Store";

import {
  FeaturedArticleContainer,
  FeaturedImg,
  FeaturedContent,
  Title,
  ContentText,
  ReadMore
} from "./styled-components";

const FeaturedArticle = () => {
  const store = useStore();
  const { featuredArticle, isLoaded } = store;

  const { fields } = featuredArticle;
  console.log(fields);

  return (
    <FeaturedArticleContainer>
      {isLoaded && (
        <>
          <FeaturedImg src='https://via.placeholder.com/533x320'></FeaturedImg>
          <FeaturedContent>
            <Title>{fields.title}</Title>
            <ContentText>{fields.content}</ContentText>
            <ReadMore>Read more</ReadMore>
          </FeaturedContent>
        </>
      )}
    </FeaturedArticleContainer>
  );
};

export default FeaturedArticle;
