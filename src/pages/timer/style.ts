import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  height: 100vh;
`;

export const TimerContainer = styled.div`
  display: block;
  width: 450px;
  height: 80vh;
  @media (min-width: 641px) {
    padding-left: 54px;
  }

  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  p {
    margin-top: 30px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin-top: 30px;
      /* margin-right: 16px; */

      & + button {
        margin-left: 16px;
      }
    }
    .Play {
      width: 60px;
      height: 60px;
    }
  }
`;

export const Circle = styled.div`
  width: 350px;
  height: 350px;

  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: ${props => props.theme.colors.background};
    width: 90%;
    height: 90%;

    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.text};
    box-shadow: inset 0 0 10px ${props => props.theme.colors.primary};

    strong {
      font-size: 72px;
      display: block;
    }

    p {
      font-size: 32px;
      opacity: 0.8;
    }
    /* text-align: center; */
  }
`;
