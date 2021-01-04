import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { shade } from 'polished';

interface Props {
  active: boolean;
}

const size = {
  medium: '641px',
  large: '1007px',
};

export const BurgerIcon = styled.div<Props>`
  button {
    background: none;
    border: none;
    position: relative;
    transition: left 0.2s;
    top: 36px;
    left: ${props => (props.active ? '250px' : '36px')};
    color: ${props => props.theme.colors.secondary};

    &:focus:not(:focus-visible) {
      box-shadow: none;
    }
    &:focus-visible {
      box-shadow: 0 0 6px 4px
        ${props => shade(0.2, props.theme.colors.secondary)};
    }
  }
`;

export const Container = styled.div<Props>`
  position: fixed;
  width: ${props => (props.active ? '300px' : '108px')};
  transition: width 0.2s;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: ${props => (props.active ? props.theme.colors.primary : 'none')};
  z-index: 1;
  span {
    color: #fafaf2;
  }
  /* background-color: none; */
  @media (min-width: ${size.medium}) {
    /* position: inherit; */
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const ListWrapper = styled.div<Props>`
  width: 108px;
  margin: 50px 0 0 30px;
  display: flex;
  align-items: center;

  position: fixed;
  font-size: 24px;
  display: ${props => (props.active ? 'block' : 'none')};

  ul {
    list-style: none;
    width: 300px;

    li {
      display: flex;
      height: 50px;
      width: 100%;

      @media (min-width: ${size.medium}) {
        margin-top: 30px;
      }
    }
  }
`;

export const StyledNavLink = styled(NavLink)<Props>`
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
  color: #fafaf2;

  svg {
    margin-right: 12px;
  }
  &:link,
  &:active {
    border: none;
    text-decoration: none;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
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

  @media (min-width: ${size.medium}) {
    justify-content: ${props => (props.active ? 'flex-start' : 'center')};
    align-items: ${props => (props.active ? 'left' : 'center')};

    span:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;
