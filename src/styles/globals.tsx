import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --bg-default: #f2f3f5;
    --text-default: #666;
    --white: #fff;
    --gray-line: #dcdde0;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: calc(calc(15 / 16) * 100%);
    }
  }

  body {
    background-color: var(--bg-default);
    color: var(--text-default);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1rem 'Inter', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
