import { useState, useRef } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuOpenIcon from "../../assets/menu_open.png";
import menuCloseIcon from "../../assets/menu_close.png";
import Resume from "../Resume/Resume";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    menuRef.current.style.right = menuOpen ? "-160px" : "0";
  };

  return (
    <nav className="nav-container">
      <div className="navbar">
        <img src={menuOpenIcon} onClick={toggleMenu} alt="Open Menu" />
        <ul
          className="nav-menu"
          ref={menuRef}
          style={{ right: menuOpen ? "0" : "-160px" }}
        >
          <img src={menuCloseIcon} onClick={toggleMenu} alt="Close Menu" />
          {["home", "about", "projects", "work", "volunteering", "contact"].map((section) => (
            <li key={section}>
              <AnchorLink
                className="nav-button"
                offset={50}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
              >
                <button className="nav-item-button">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </AnchorLink>
            </li>
          ))}
          <li>
            <Resume />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
