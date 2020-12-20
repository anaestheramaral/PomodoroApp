import React from 'react';
import { FaRegClock, FaUserCircle, FaRegChartBar } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Nav } from './style';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Nav>
        <a href="#a">
          <FaUserCircle size={32} />
        </a>
        <Link to="/">
          <FaRegClock size={32} />
        </Link>
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
