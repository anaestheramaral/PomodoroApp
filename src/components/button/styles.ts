import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  /* background-color: #ececec; */
  /* border-color: #3f51b5; */
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};

  border: 2px solid ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
