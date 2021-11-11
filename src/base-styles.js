import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', serif;
    }

 body {
    background-image: linear-gradient(
    white 580px,
    #ffeee2 650px,
    #ffeee2 85%,
    white
  );

  @media (max-width: 768px) {
    background-image: linear-gradient(
      white 9%,
      #ffeee2 10%,
      #ffeee2 90%,
      white
    );
  }
 }
`;

export default GlobalStyle;
