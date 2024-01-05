import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useRef } from "react";

const Navbar = () => {
  const navBarElement = useRef();
  const navLinkElement = useRef();
  const htmlCssArrowElement = useRef();
  const menuBarClickOpenHandler = () => {
    console.log("Menu bar click Handler");
    navLinkElement.current.style.left = "0";
  };
  /*Todo: toggle class use classlist library */
  const menuCloseHandler = () => {
    navLinkElement.current.style.left = "-100%";
  };
  const htmlCssArrowClickEventHandler = () => {
    navLinkElement.current.classList.toggle("show1");
  };
  const htmlMoreArrowClickEventHandler = () => {
    navLinkElement.current.classList.toggle("show2");
  };
  const htmlJSArrowClickEventHandler = () => {
    navLinkElement.current.classList.toggle("show3");
  };
  const bxSerachClickEventHandler = () => {
    navBarElement.current.classList.toggle("showInput");
  };
  return (
    <nav>
      <div className="navbar" ref={navBarElement}>
        <i className="bx bx-menu" onClick={menuBarClickOpenHandler}></i>
        <div className="logo">
          <NavLink to="/">Logo</NavLink>
        </div>
        <div className="nav-links" ref={navLinkElement}>
          <div className="sidebar-logo">
            <span className="logo-name">Logo</span>
            <i className="bx bx-x" onClick={menuCloseHandler}></i>
          </div>
          <ul className="links">
            <li>
              <NavLink href="#">React Life Cycle</NavLink>
              <i
                className="bx bxs-chevron-down js-arrow arrow "
                onClick={htmlJSArrowClickEventHandler}
              ></i>
              <ul className="js-sub-menu sub-menu">
                <li>
                  <NavLink to="/mounting">Mounting phase</NavLink>
                </li>
                <li>
                  <NavLink to="/update">Update phase</NavLink>
                </li>
                <li>
                  <NavLink to="/unmount">Unmounting phase</NavLink>
                </li>
                <li>
                  <NavLink href="#">Complete Website</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="#">HOME</NavLink>
            </li>
            <li>
              <NavLink href="#">HTML & CSS</NavLink>
              <i
                className="bx bxs-chevron-down htmlcss-arrow arrow  "
                ref={htmlCssArrowElement}
                onClick={htmlCssArrowClickEventHandler}
              ></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li>
                  <NavLink href="#">Web Design</NavLink>
                </li>
                <li>
                  <NavLink href="#">Login Forms</NavLink>
                </li>
                <li>
                  <NavLink href="#">Card Design</NavLink>
                </li>
                <li className="more">
                  <span>
                    <NavLink href="#">More</NavLink>
                    <i
                      className="bx bxs-chevron-right arrow more-arrow"
                      onClick={htmlMoreArrowClickEventHandler}
                    ></i>
                  </span>
                  <ul className="more-sub-menu sub-menu">
                    <li>
                      <NavLink href="#">Neumorphism</NavLink>
                    </li>
                    <li>
                      <NavLink href="#">Pre-loader</NavLink>
                    </li>
                    <li>
                      <NavLink href="#">Glassmorphism</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <NavLink href="#">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink href="#">CONTACT US</NavLink>
            </li>
          </ul>
        </div>
        <div className="search-box">
          <i className="bx bx-search" onClick={bxSerachClickEventHandler}></i>
          <div className="input-box">
            <input type="text" placeholder="Search..."></input>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
