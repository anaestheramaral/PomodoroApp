import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  margin-top: 36px;
`;

export const ContentWrapper = styled.div`
  max-width: 600px;
  @media (min-width: 641px) {
    padding-left: 54px;
  }
`;
