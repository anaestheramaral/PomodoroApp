import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &::not(.focus-visible) {
      outline: none;
    }
    }

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button{
    font: 1rem Roboto, sans-serif;
    font-weight: ${props => props.theme.fontWeight} ;
  }

  strong, p, h1, h2, span {
    color: ${props => props.theme.colors.text};
  }

  /* #root{
    max-width: 48vw;
    margin: 0 auto;
    padding: 40px 20px;
  } */

  button{
    cursor: pointer;
  }
`;
