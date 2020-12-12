import React from 'react';
import { FaRegClock, FaUserCircle, FaRegChartBar } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { Container, Nav } from './style';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Nav>
        <a href="#a">
          <FaUserCircle size={32} />
        </a>
        <a href="#a">
          <FaRegClock size={32} />
        </a>
        <a href="#a">
          <FaRegChartBar size={32} />
        </a>
        <a href="#a">
          <FiSettings size={32} />
        </a>
        <a href="#a">
          <FiLogOut size={20} className="logOut" />
        </a>
      </Nav>
    </Container>
  );
};

export default NavBar;
