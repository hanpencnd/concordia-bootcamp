import React, { useState } from "react";
import {
  CategoriesContainer,
  CategoryHeader,
  CategorySearch,
  SearchBtn,
  CategoryTitle,
  ListOfCategories,
  CategoryBtn,
  ViewAllBtn
} from "./styled-components";
import { useStore } from "../../contexts/Store";

const Categories = () => {
  // const [counter, setCounter] = useState(1);
  const store = useStore();
  const {
    setArticles,
    categories,
    selectedCategory,
    setSelectedCategory,
    setCounter,
    setSkipNum
  } = store;
  let categoryCopy = [...categories];

  let categoryNames = categoryCopy.filter(
    (category, idx, arr) => arr.indexOf(category) === idx
  );

  // manual remove of names with "
  categoryNames = [...categoryNames.slice(0, 4)];

  const handleCategoryClick = category => {
    if (category === "all") {
      setSelectedCategory("all");
    } else {
      setSelectedCategory(category);
    }

    setSkipNum(0);
    setCounter(1);
    setArticles([]);
  };

  return (
    <CategoriesContainer>
      <h1>Categories</h1>
      <ListOfCategories>
        <ViewAllBtn
          onClick={() => handleCategoryClick("all")}
          style={{ background: selectedCategory === "all" && "transparent" }}
        >
          VIEW ALL
        </ViewAllBtn>
        {categoryNames.map(category => {
          return (
            <CategoryBtn
              onClick={() => handleCategoryClick(category)}
              style={{
                background: selectedCategory === category && "transparent"
              }}
            >
              {category}
            </CategoryBtn>
          );
        })}
      </ListOfCategories>
      {/* // TODO form handling */}
      <form>
        <CategoryHeader>
          <CategorySearch />
          <SearchBtn>
            <img
              src='https://www.dialogue.co/hubfs/search-icon.png'
              alt='search'
            />
          </SearchBtn>
        </CategoryHeader>
      </form>
    </CategoriesContainer>
  );
};

export default Categories;
