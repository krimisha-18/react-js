import React from 'react'
import { LuUser2 } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { RiHeartLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import './Header.css'

const Header = () => {
  return (
    <div className=''>
      <div className="container">
        <div className="row top-header justify-content-between">
          <div className="col-4 col-lg-2">
            <div className="logo img">
              <img src="img/logo.png" alt="" />
            </div>
          </div>

          <div className="col-8 col-lg-6">
            <div className="search d-flex justify-content-end ">
              <div className="input-box">
                <input type="text" placeholder="Search for Items..." className='rounded-start' />
              </div>
              {/* ALL categories dropdown */}
              <div className="dropdown">
                <button className="btn dropdown-toggle dd-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  All Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">All Categories</a></li>
                  <li><a className="dropdown-item" href="#">Mens</a></li>
                  <li><a className="dropdown-item" href="#">Womens</a></li>
                  <li><a className="dropdown-item" href="#">Electronics</a></li>
                </ul>
              </div>
              <div className="s-icon rounded-end d-flex justify-content-center align-items-center">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="d-none col-lg-4 d-lg-flex justify-content-lg-end align-items-lg-center">
            <div className="awc">
              <ul className='d-flex mb-0 ps-0'>
                <li className='d-flex'>
                  <a href="#" className='info acc'>
                    <span className=''><LuUser2 /></span>
                    Account
                  </a>

                </li>
                <li>
                  <a href="#" className='info'>
                    <span className=''><RiHeartLine /></span>
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className='info'>
                    <span className=''><HiOutlineShoppingCart /></span>
                    cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
