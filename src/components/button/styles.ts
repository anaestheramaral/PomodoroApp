import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  /* background-color: #ececec; */
  /* border: 2px solid ${props => props.theme.colors.buttonsColor}; */
  /* border: none; */

  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.buttonsBkg};

  color: ${props => props.theme.colors.text};
  border: 2px solid #0d1b2a;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${props => shade(0.15, props.theme.colors.buttonsBkg)};
  }
`;
