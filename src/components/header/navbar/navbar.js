import React, { useState, useCallback } from "react";
import "./navBar.scss";
import { FaUser } from "react-icons/fa";
import SubMenu from "./SubMenu";
const Navbar = (props) => {
  const [isMenuopen, setMenuOpen] = useState(false);
  const togglemenu = useCallback(() => {
    setMenuOpen(!isMenuopen);
  });
  return (
    <div>
      <ul className="navbar">
        <li>home</li>
        <li onClick={togglemenu}>
          {isMenuopen && <SubMenu />}
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

export default Navbar;
