import React, { useState } from "react";
import "./navBar.scss";
import { FaUser } from "react-icons/fa";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const [isMenuopen, setMenuOpen] = useState(false);
  const togglemenu = () => {
    setMenuOpen(!isMenuopen);
  };
  return (
    <div>
      <ul className="navbar">
        <li>home</li>
        <li onClick={togglemenu}>
          {isMenuopen && <SubMenu />}
          Books
        </li>

        <li>how it works</li>
        <li>About us</li>

        <li>
          <Link className="btn-link hover-link" to="/notFound">
            didn't find your book
          </Link>
        </li>
        <Link className="btn-link hover-link" to="/upload">
          <li>Sell your book</li>
        </Link>

        <li onClick={props.openDashBoard}>
          <FaUser />
          my account
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
