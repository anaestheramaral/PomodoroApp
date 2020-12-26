import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  /* background-color: #3f51b5; */
  background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  width: 10vw;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  ul {
    list-style: none;
    li {
      & + li {
        margin-top: 30px;
        .logOut {
          margin-top: 100px;
        }
      }
      svg {
        position: relative;
        top: 100px;
        width: 60px;
        color: ${props => props.theme.colors.icons};
        /* color: #ececec; */

        &:hover {
          color: ${shade(0.2, '#a8dadc')};
        }
      }
    }
  }
  a,
  Link {
    text-decoration: none;
    opacity: 0.8;
  }
`;
