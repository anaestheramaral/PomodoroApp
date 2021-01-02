import styled from 'styled-components';
import { shade } from 'polished';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  width: 120px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: calc(25vh + 24px);

  ul {
    list-style: none;
    align-items: center;
    /* justify-content: space-between; */

    li {
      width: 100%;
      height: 50px;
      background-color: ${props => props.theme.colors.primary};
      & + li {
        margin-top: 10vh;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:link {
    border: none;
  }

  svg {
    color: ${props => props.theme.colors.icons};
    text-decoration: none;
    opacity: 0.8;
    border: none;

    &:hover {
      color: ${shade(0.2, '#a8dadc')};
    }
  }
  &.selected {
    svg {
      color: ${props => props.theme.colors.secondary};
    }
  }

  /* &:focus {
    svg {
      outline: 2px solid #1a1a1a;
    }
  } */

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    svg {
      outline: 2px solid #1a1a1a;
    }
  }
`;
