import React, { useState } from 'react';
import {
  FaRegClock,
  FaUserCircle,
  FaRegChartBar,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa';

import { FiSettings, FiLogOut, FiMenu } from 'react-icons/fi';

import { BurgerIcon, ListWrapper, Container, StyledNavLink } from './styles';

const BurgerMenu: React.FC = () => {
  const icons = {
    LogIn: <FaUserCircle size={32} title="logIn" />,
    Timer: <FaRegClock size={28} title="timer" />,
    Stats: <FaRegChartBar size={20} title="Statistics" />,
    Settings: <FiSettings size={28} title="settings" />,
    LogOut: <FiLogOut size={20} title="LogOut" />,
    About: <FaInfoCircle size={28} title="about" />,
    Menu: <FiMenu size={36} title="menu" />,
    Close: <FaTimes size={36} title="close menu" />,
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container active={isOpen}>
      <BurgerIcon active={isOpen}>
        <button type="button" onClick={handleMenu}>
          {isOpen ? icons.Close : icons.Menu}
        </button>
      </BurgerIcon>
      <ListWrapper active={isOpen}>
        <nav>
          <ul>
            <li>
              <StyledNavLink
                exact
                to="/"
                activeClassName="selected"
                onClick={handleMenu}
                active={isOpen}
              >
                {icons.Timer}
                <span>Timer</span>
              </StyledNavLink>
            </li>

            <li>
              <StyledNavLink
                to="/settings"
                activeClassName="selected"
                onClick={handleMenu}
                active={isOpen}
              >
                {icons.Settings}
                <span>Settings</span>
              </StyledNavLink>
            </li>

            <li>
              <StyledNavLink
                to="/about"
                activeClassName="selected"
                onClick={handleMenu}
                active={isOpen}
              >
                {icons.About}
                <span>About</span>
              </StyledNavLink>
            </li>
          </ul>
        </nav>
      </ListWrapper>
    </Container>
  );
};

export default BurgerMenu;
