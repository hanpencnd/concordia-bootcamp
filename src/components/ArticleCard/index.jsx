import React from "react";

import {
  ArticleBox,
  ContentDiv,
  ArticleImg,
  Title,
  Category
} from "./styled-components";

const ArticleCard = ({ articles }) => {
  console.log(articles);
  const articleFields = articles.map(article => article.fields);
  // const { fields } = articles;
  console.log(articleFields);

  return articleFields.map(field => {
    return (
      <ArticleBox>
        <ArticleImg src='https://via.placeholder.com/518x230' />
        <ContentDiv>
          <Title>{field.title}</Title>
          <Category>{field.category}</Category>
        </ContentDiv>
      </ArticleBox>
    );
  });
};

export default ArticleCard;
