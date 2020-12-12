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
  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

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

  background-color: #3f51b5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: #f2f2fa;
    width: 90%;
    height: 90%;

    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
