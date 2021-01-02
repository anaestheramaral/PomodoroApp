import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10vh;
  &:first-child {
    @media (min-width: 641px) {
      padding-left: 54px;
    }
  }
`;
