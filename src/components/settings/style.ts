import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 30px;
`;

export const ControllersWrapper = styled.div`
  display: flex;
  margin-top: 5vh;
  align-items: center;
  justify-content: center;
  h2,
  button {
    color: #ececec;
  }

  > div {
    border-radius: 10px;
    /* background-color: #3f51b5; */
    /* color: #fff; */
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};
    padding: 2%;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      display: flex;
      flex-direction: column;
      button {
        height: 20px;
        background: none;
        border: none;
        color: #fff;
      }
    }
    span {
      margin-right: 16px;
      font-weight: 600;
    }

    & + div {
      margin-left: 20px;
    }
    h2 {
      flex: 1;
      font-size: 1rem;
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
