import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import profilePic from '../images/placeholder-img.jpeg';
import Navbar from './Navbar';

function Header ({ currentPage, handlePageChange }) {
  return (
<header className="Header">
  <h1 className="H1-name"> Kevin Cortina </h1>

  <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
</header>


  );
}

export default Header;