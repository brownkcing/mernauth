import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;700&family=Roboto:wght@300;400;700&display=swap')
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box
 
  }

 body {
    display: flex;
    justify-content: center;
    overflow: auto;
    margin: 0;
    margin-top: 5em;
    padding: 0;
    font-family: "Roboto", sans-serif;
 }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  input {
    font-size: 1rem;
    height: 2em;
    background: transparent;
    border: none;
    border-bottom: 1px solid gray;
    width: 100%;
    &:focus {
      outline-width: 0;
      border-bottom: 2px solid gray;
    }
  }

  label {
    color: gray;
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    text-align: initial;
    display: block;
    margin-bottom: .5rem;
  }
`;

export default GlobalStyles;