import React, { useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar-container">
      <div className="container">
        <div className="row top-navbar d-flex justify-content-between align-items-center">
        <div className="col-1">
  <div className="toggle-icon dropdown">
    <a className="border fs-5" href="#" onClick={toggleDropdown}>
      <HiMenuAlt1 />
    </a>
    <ul className="dropdown-menu">
      <li><a href="#">Dropdown Item 1</a></li>
      <li><a href="#">Dropdown Item 2</a></li>
      <li><a href="#">Dropdown Item 3</a></li>
    </ul>
  </div>
</div>

          <div className="col-6 d-flex justify-content-center">
  <ul className="menu d-flex mb-0 ps-0 justify-content-end">
    <li className="nav-item">
      <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" href="#">Category <span><FaAngleDown /></span></a>
      <ul className="dropdown-menu">
        <li><a href="#">Subcategory 1</a></li>
        <li><a href="#">Subcategory 2</a></li>
        <li><a href="#">Subcategory 3</a></li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" href="#">Products <span><FaAngleDown /></span></a>
      <ul className="dropdown-menu">
        <li><a href="#">Product 1</a></li>
        <li><a href="#">Product 2</a></li>
        <li><a href="#">Product 3</a></li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" href="#">Pages <span><FaAngleDown /></span></a>
      <ul className="dropdown-menu">
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" href="#">Blog <span><FaAngleDown /></span></a>
      <ul className="dropdown-menu">
        <li><a href="#">Blog Post 1</a></li>
        <li><a href="#">Blog Post 2</a></li>
        <li><a href="#">Blog Post 3</a></li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" href="#">Elements <span><FaAngleDown /></span></a>
      <ul className="dropdown-menu">
        <li><a href="#">Element 1</a></li>
        <li><a href="#">Element 2</a></li>
        <li><a href="#">Element 3</a></li>
      </ul>
    </li>
  </ul>
</div>


          <div className="col-2 d-flex justify-content-end">
            <div className="calling d-flex align-items-center">
              <span className="call-icon"><IoIosCall /></span>
              <a href="tel:+1234567890">+123 (456) (7890)</a>
            </div>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Category</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Elements</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
