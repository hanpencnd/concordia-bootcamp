import React, { useState } from "react";
import { useStore } from "../../contexts/Store";
import ArticleCard from "../ArticleCard";

import { ArticleListContainer, LoadMoreBtn } from "./styled-components";

const PaginatedArticleList = () => {
  const store = useStore();
  const {
    articles,
    setArticles,
    counter,
    setCounter,
    setSkipNum,
    limitNum,
    selectedCategory
  } = store;

  const handleLoadMore = () => {
    // check articles array length
    // if already < 6 nothing happens
    if (articles.length < 6) {
      return;

      // update states otherwise
    } else {
      setSkipNum(counter * limitNum);
      setCounter(counter + 1);
    }
  };

  return (
    <ArticleListContainer>
      <LoadMoreBtn onClick={handleLoadMore}>
        <h2>Load More</h2>
      </LoadMoreBtn>
    </ArticleListContainer>
  );
};

export default PaginatedArticleList;
