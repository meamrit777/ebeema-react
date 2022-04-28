import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./dropdown";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handelClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [show, setShow] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 800) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 800) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`navbar ${show && "nav__blue"}`}>
      <Link to="/">
        <img className="header-logo" src="./image/logo.png" alt="" />
      </Link>
      <div className="three-bar" onClick={handelClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="#" className="nav-links" onClick={closeMobileMenu}>
            Insurance Plans <IoIosArrowDown className="ioios" size="1rem" />
          </Link>
          
          {dropdown && <Dropdown />}
      
        </li>
        <li className="nav-item">
          <Link
            to="/aboutUs"
            className="nav-links acb"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className="nav-links acb"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-links acb" onClick={closeMobileMenu}>
            Blog
          </Link>
          <div class="vericle-line"></div>
        </li>
        <li className="nav-item">
          <Link
            to="/login"
            className="nav-links-mobile auth-log"
            onClick={closeMobileMenu}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="nav-links-mobile auth-reg"
            onClick={closeMobileMenu}
          >
            Register
          </Link>
        </li>
      </ul>

      {/* <div className="app_header">
        <ul className="navbar-menus">
          <li className="normal-width list_float">
            <a href="/contact" className="menu-icon">
              Contact
            </a>
          </li>
          <li className="normal-width list_float">
            <a href="/blog" className="menu-icon">
              Blog
            </a>
          </li>
          <li className="auth-wrapper list_float">
            <a className="nav-login" href="/login">
              Login
            </a>
            <a className="nav-register" href="/register">
              Register
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
export default Navbar;
