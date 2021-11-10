import React, { useState } from "react";
import { useStore } from "../../contexts/Store";
import ArticleCard from "../ArticleCard";

import { ArticleListContainer, LoadMoreBtn } from "./styled-components";

const PaginatedArticleList = () => {
  const [counter, setCounter] = useState(1);
  const store = useStore();
  const { stackedArticles, skipNum, setSkipNum, limitNum } = store;

  const handleLoadMore = () => {
    setSkipNum(skipNum => (skipNum = counter * limitNum));
    setCounter(counter + 1);
    // console.log(skipNum, limitNum, counter);
  };

  return (
    <ArticleListContainer>
      {skipNum > 0 && <ArticleCard articles={stackedArticles} />}
      <LoadMoreBtn onClick={handleLoadMore}>
        <h2>Load More</h2>
      </LoadMoreBtn>
    </ArticleListContainer>
  );
};

export default PaginatedArticleList;
