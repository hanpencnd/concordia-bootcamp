import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";

import Container from "./components/Container";
import ArticleContainer from "./components/ArticleContainer";
import ArticleCard from "./components/ArticleCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PaginatedArticleList from "./components/PaginatedArticleList";
import FeaturedArticle from "./components/FeaturedArticle";
import BlogTitle from "./components/BlogTitle";

function App() {
  const store = useStore();
  const { articles } = store;
  // console.log("TODO: use the store to create the base UI", store);

  return (
    <>
      <GlobalStyle />
      <main className='App'>
        <Header />
        <BlogTitle />
        <FeaturedArticle />
        <ArticleContainer>
          <ArticleCard articles={articles} />
          <PaginatedArticleList />
        </ArticleContainer>
        <Footer />
      </main>
    </>
  );
}

export default App;
