import React, { Component, useState, useCallback } from "react";
import { FaOpencart, FaUser, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { BsHeart, BsSearch } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import "./header.scss";
import NavBar from "./navbar/navbar";
import { Fade } from "react-bootstrap";
import { useViewportHook } from "../utils/viewPortHandler";
import { desktopRes } from "../../viewPortBreakpoints";
import MobileSearchbar from "./navbar/mobileSearchBar";
import NavBarMobile from "./navbar/navBarMobile";
import BottomNavbarMobile from "./navbar/BottomNavbarMobile";
import Login from "../auth/Login";
import Cart from "../Cart/Cart";
import { connect } from "react-redux";
const Header = (props) => {
  const { width } = useViewportHook();

  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuopen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const toggleSearch = useCallback(() => {
    setSearchOpen(!isSearchOpen);
  });
  const togglemenu = useCallback(() => {
    setMenuOpen(!isMenuopen);
  });
  const toggleLogin = useCallback(() => {
    setLoginOpen(!isLoginOpen);
  });
  const toggleCart = useCallback(() => {
    setCartOpen(!isCartOpen);
  });

  const redirectToDashBoard = () => {};
  return (
    <div>
      <div className="top-header">
        <span className="top-header-text ">
          <FaPhoneAlt className="phoneicon" size={15} />
          +91 8779639797 / +91 8369212005
        </span>
        {desktopRes < width && (
          <span className="top-header-text ">
            Free Delivery* | Easy Returns | COD Available
          </span>
        )}
      </div>
      <div className="main-header">
        <img className="logo" src="/logo.png" alt="logo" />
        {desktopRes < width && (
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by Book Name, Author, ISBN, Publication"
            />
            <button>Search</button>
          </div>
        )}

        {desktopRes < width && (
          <div className="userButtons">
            <div
              className="item"
              onClick={!props.isLoggedIn ? toggleLogin : redirectToDashBoard}
            >
              <FaUser size={20} />
              <p>
                {props.isLoggedIn
                  ? `Hello,${props.profile.name}`
                  : `Login/register`}
              </p>
            </div>
            <div className="item">
              <BsHeart size={20} />
              <p>WishList</p>
            </div>
            <div
              className="item cart"
              onClick={props.isLoggedIn ? toggleCart : toggleLogin}
            >
              <FaOpencart size={40} color="#3ac6bf" />
              <div className="label-div">
                <span>Shopping Cart</span>
                <div className="cart-amount">
                  <span>Rs. 0.00</span>
                  <FaChevronDown />
                </div>
              </div>
            </div>
          </div>
        )}
        {desktopRes > width && (
          <div className="nav-icons">
            <BsSearch onClick={toggleSearch} size={25} />
            <MdMenu onClick={togglemenu} size={30} />
          </div>
        )}
        {desktopRes > width && (
          <BottomNavbarMobile
            isLoggedIn={props.isLoggedIn}
            openLogin={toggleLogin}
            openCart={toggleCart}
            openDashBoard={redirectToDashBoard}
          />
        )}
      </div>
      {desktopRes < width && <NavBar />}

      <MobileSearchbar isOpen={isSearchOpen} closeSearch={toggleSearch} />
      <NavBarMobile isOpen={isMenuopen} closeMenu={togglemenu} />
      {<Login closeLogin={() => setLoginOpen(false)} isOpen={isLoginOpen} />}
      <Cart isOpen={isCartOpen} closeCart={toggleCart} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.auth,
  profile: state.user.profile,
});

export default connect(mapStateToProps)(Header);
