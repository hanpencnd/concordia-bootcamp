import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const store = useStore();

  console.log("TODO: use the store to create the base UI", store);

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />

        {/* TODO: Blog things goes here. Use the components folder! */}
        <Container>
          <h1>Hello 🌎</h1>
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;
