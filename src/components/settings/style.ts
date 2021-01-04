import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 500px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  @media (min-width: 641px) {
    /* padding-left: 108px; */
  }

  /* padding: 30px; */

  > button {
    background-color: ${props => props.theme.colors.secondary};
    color: #f2f2fa;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 5vh;

    &:hover {
      background-color: ${props => shade(0.2, props.theme.colors.secondary)};
    }
    &:active {
      transform: scale(0.96);
    }

    &:focus:not(:focus-visible) {
      box-shadow: none;
    }
    &:focus-visible {
      box-shadow: 0 0 6px 4px
        ${props => shade(0.2, props.theme.colors.secondary)};
    }
  }

  h1 {
    margin-bottom: 10vh;
    letter-spacing: 0.05em;
  }
`;

export const ControllersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2,
  button,
  span {
    color: #f2f2fa;
  }

  button:focus {
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;
  }

  > div {
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    padding: 5px 15px;
    min-width: 300px;
    max-width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;

    & + div {
      margin-top: 16px;
    }

    > div {
      display: flex;
      flex-direction: column;
      button {
        height: 20px;
        background: none;
        border: none;
      }
    }
    span {
      margin-right: 16px;
      font-weight: 600;
    }

    h2 {
      flex: 1;
      font-size: 1rem;
    }
  }

  @media (min-width: 641px) {
    flex-direction: row;
    margin-top: 5vh;

    > div {
      max-width: 120px;
      min-width: 120px;
      padding: 2%;

      & + div {
        margin-left: 20px;
        margin-top: 0;
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 30px;

  .react-switch {
    display: inline-block;
  }
`;
