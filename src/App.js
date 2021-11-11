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
import Categories from "./components/Categories";

function App() {
  const store = useStore();
  const { articles } = store;

  return (
    <>
      <GlobalStyle />
      <main className='App'>
        <Header />
        <Container>
          <BlogTitle />
          <FeaturedArticle />
          <Categories />
          <ArticleContainer>
            <ArticleCard articles={articles} />
            <PaginatedArticleList />
          </ArticleContainer>
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
