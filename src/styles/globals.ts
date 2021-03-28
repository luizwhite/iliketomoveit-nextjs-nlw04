import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: calc(calc(15 / 16) * 100%);
    }
  }

  body {
    background-color: ${({ theme }) => theme.appColors.bg};
    color: ${({ theme }) => theme.appColors.textSoft};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  input,
  button,
  textarea {
    font: 400 1rem 'Inter', sans-serif;
    outline: none;
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

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
