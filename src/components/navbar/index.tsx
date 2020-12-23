import React from 'react';
import { FaRegClock, FaUserCircle, FaRegChartBar } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Nav } from './style';

const NavBar: React.FC = () => {
  const icons = {
    LogIn: <FaUserCircle size={32} />,
    Timer: <FaRegClock size={32} />,
    Stats: <FaRegChartBar size={32} />,
    Settings: <FiSettings size={32} />,
    LogOut: <FiLogOut size={32} />,
  };

  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <a href="#a">
              <FaUserCircle size={32} />
            </a>
          </li>

          <li>
            <Link to="/">{icons.Timer}</Link>
          </li>

          <li>
            <Link to="/settings">{icons.Settings}</Link>
          </li>

          <li>
            <a href="#a">
              <FaRegChartBar size={32} />
            </a>
          </li>

          <li>
            <a href="#a">
              <FiLogOut size={20} className="logOut" />
            </a>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default NavBar;
