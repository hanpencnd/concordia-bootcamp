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
  const { isLoaded, featuredArticle } = store;

  const { fields } = featuredArticle;
  // console.log(fields);

  return (
    <FeaturedArticleContainer>
      {isLoaded && (
        <>
          <FeaturedImg src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></FeaturedImg>
          <FeaturedContent>
            <Title>{fields.title}</Title>
            <ContentText>{`${fields.content.substring(
              0,
              250
            )}...`}</ContentText>
            <ReadMore>Read more</ReadMore>
          </FeaturedContent>
        </>
      )}
    </FeaturedArticleContainer>
  );
};

export default FeaturedArticle;
