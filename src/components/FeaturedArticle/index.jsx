import React from "react";
import { useStore } from "../../contexts/Store";

import {
  FeaturedArticleContainer,
  FeaturedImg,
  FeaturedContent
} from "./styled-components";

const FeaturedArticle = () => {
  const store = useStore();
  const { featuredArticle } = store;
  const { fields } = featuredArticle;

  return (
    <FeaturedArticleContainer>
      <FeaturedImg src='https://via.placeholder.com/100x100'></FeaturedImg>
      <FeaturedContent>
        <h2>{fields.title}</h2>
        <p>{fields.content}</p>
      </FeaturedContent>
    </FeaturedArticleContainer>
  );
};

export default FeaturedArticle;
