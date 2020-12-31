import styled from 'styled-components';
import { shade } from 'polished';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  svg {
    position: relative;
    top: 100px;
    width: 60px;
    color: ${props => props.theme.colors.icons};
    /* color: #ececec; */
    text-decoration: none;
    opacity: 0.8;

    &:hover {
      color: ${shade(0.2, '#a8dadc')};
    }
  }
  &.selected {
    svg {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  width: 120px;
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
    }
  }
`;
