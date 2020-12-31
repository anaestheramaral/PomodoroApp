import React from 'react';
import { FaRegClock, FaUserCircle, FaRegChartBar } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import { Container, Nav, StyledNavLink } from './style';

const NavBar: React.FC = () => {
  const icons = {
    LogIn: <FaUserCircle size={32} title="logIn" />,
    Timer: <FaRegClock size={32} title="timer" />,
    Stats: <FaRegChartBar size={32} title="Statistics" />,
    Settings: <FiSettings size={32} title="settings" />,
    LogOut: <FiLogOut size={20} title="LogOut" />,
  };

  return (
    <Container>
      <Nav>
        <ul>
          {/* <li>
            <StyledNavLink to="#a" activeClassName="selected">
              {icons.LogIn}
            </StyledNavLink>
          </li> */}

          <li>
            <StyledNavLink exact to="/" activeClassName="selected">
              {icons.Timer}
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/settings" activeClassName="selected">
              {icons.Settings}
            </StyledNavLink>
          </li>

          {/* <li>
            <StyledNavLink to="#a">{icons.Stats}</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="#a">{icons.LogOut}</StyledNavLink>
          </li> */}
        </ul>
      </Nav>
    </Container>
  );
};

export default NavBar;
