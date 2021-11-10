import React, { useState, useEffect, useContext } from "react";
import {
  getAllArticles,
  getPaginatedArticles,
  getFeaturedArticle
} from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [stackedArticles, setStackedArticles] = useState([]);
  const [skipNum, setSkipNum] = useState(0);
  const limitNum = 6;

  useEffect(() => {
    (async function fetchArticles() {
      setArticles(await getAllArticles());
    })();
  }, []);

  useEffect(() => {
    (async function fetchArticles() {
      setArticles([
        ...articles,
        ...(await getPaginatedArticles(limitNum, skipNum))
      ]);
      // setStackedArticles(stackedArticles => [...stackedArticles, ...articles]);
    })();
  }, [skipNum]);

  // TODO: Update the method below to return the latest featured article from the list of articles
  useEffect(() => {
    (async function getFeatured() {
      setFeaturedArticle(await getFeaturedArticle());
    })();
  }, []);

  console.log(featuredArticle);
  return (
    <StoreContext.Provider
      value={{
        featuredArticle,
        // getFeaturedArticle,
        articles,
        stackedArticles,
        skipNum,
        setSkipNum,
        limitNum
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
