import React, { useState, useEffect, useContext } from "react";
import {
  getCategoryNames,
  getPaginatedArticles,
  getFeaturedArticle,
  getArticlesByCategory
} from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [featuredArticle, setFeaturedArticle] = useState([]);
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [counter, setCounter] = useState(1);
  const [skipNum, setSkipNum] = useState(0);
  const limitNum = 6;

  useEffect(() => {
    const fetchCategoryNames = async () => {
      setCategories(await getCategoryNames());
    };
    fetchCategoryNames();
  }, []);

  useEffect(() => {
    console.log(skipNum);
    const fetchArticles = async () => {
      if (selectedCategory !== "all") {
        return;
      } else {
        setArticles([
          ...articles,
          ...(await getPaginatedArticles(limitNum, skipNum))
        ]);
      }
    };
    fetchArticles();
  }, [skipNum]);

  // TODO: Update the method below to return the latest featured article from the list of articles
  useEffect(() => {
    const getFeatured = async () => {
      setFeaturedArticle(await getFeaturedArticle());
      setIsLoaded(true);
    };
    getFeatured();
  }, []);

  useEffect(() => {
    console.log(selectedCategory);
    const getCategorized = async () => {
      if (selectedCategory === "all") {
        setArticles([
          ...articles,
          ...(await getPaginatedArticles(limitNum, skipNum))
        ]);
      } else {
        setArticles([
          ...articles,
          ...(await getArticlesByCategory(limitNum, skipNum, selectedCategory))
        ]);
      }
    };
    getCategorized();
  }, [selectedCategory, skipNum]);

  return (
    <StoreContext.Provider
      value={{
        isLoaded,
        featuredArticle,
        articles,
        setArticles,
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        counter,
        setCounter,
        setSkipNum,
        limitNum
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
