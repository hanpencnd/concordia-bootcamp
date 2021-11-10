import React from "react";

import { ArticleWrapper } from "./styled-components";

const ArticleContainer = ({ children }) => {
  return <ArticleWrapper>{children}</ArticleWrapper>;
};

export default ArticleContainer;
