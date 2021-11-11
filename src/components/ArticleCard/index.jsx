import React from "react";

import {
  ArticleBox,
  ContentDiv,
  ArticleImg,
  Title,
  Category
} from "./styled-components";

const ArticleCard = ({ articles }) => {
  const articleFields = articles.map(article => article.fields);
  // const { fields } = articles;
  // console.log(articles);
  // console.log(articleFields);

  return articleFields.map(field => {
    return (
      <ArticleBox>
        {/* <ArticleImg src='https://via.placeholder.com/518x230' /> */}
        <ArticleImg src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        <ContentDiv>
          <Title>{field.title}</Title>
          <Category>{field.category}</Category>
        </ContentDiv>
      </ArticleBox>
    );
  });
};

export default ArticleCard;
