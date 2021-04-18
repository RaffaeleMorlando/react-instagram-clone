import React from 'react'
import '../css/Navbar.css';
import Search from './Search';
import NavbarOptions from './NavbarOptions';

const Navbar = () => {
  return (
    <nav className="navbar_costum">
      <div className="logo_container">
        <img src="assets/logo.png" alt=""/>
      </div>
      <Search/>
      <NavbarOptions/>
    </nav>
  )
}

export default Navbar
