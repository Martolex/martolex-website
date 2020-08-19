import React from "react";
import "./navBar.scss";
import { FaUser } from "react-icons/fa";
const Navbar = (props) => {
  return (
    <div>
      <ul className="navbar">
        <li>home</li>
        <li>
          <SubMenu />
          Books
        </li>
        <li>how it works</li>

        <li>contact us</li>
        <li>About us</li>
        <li>didn't find your book</li>
        <li>
          <FaUser />
          my account
        </li>
      </ul>
    </div>
  );
};

const SubMenu = (props) => {
  return (
    <ul className="submenu">
      <li>
        <span>item1</span>
        <ul>
          <li>subitem1</li>
          <li>subitem1</li>
          <li>subitem1</li>
          <li>subitem1</li>
        </ul>
      </li>
      <li>
        <span>item1</span>
        <ul>
          <li>subitem1</li>
          <li>subitem1</li>
          <li>subitem1</li>
        </ul>
      </li>
      <li>
        <span>item1</span>
      </li>
    </ul>
  );
};

export default Navbar;
