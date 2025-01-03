import { useState, useRef } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuOpenIcon from '../../assets/menu_open.png';
import menuCloseIcon from '../../assets/menu_close.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    menuRef.current.style.right = menuOpen ? "-160px" : "0";
  };

  return (
    <nav className='nav-container'>
      <div className="navbar">
        <img src={menuOpenIcon} onClick={toggleMenu} alt="Open Menu" />
        <ul className='nav-menu' ref={menuRef} style={{ right: menuOpen ? "0" : "-160px" }}>
          <img src={menuCloseIcon} onClick={toggleMenu} alt="Close Menu" />
          {['home', 'about', 'projects', 'work', 'contact'].map((section) => (
            <li key={section}>
              <AnchorLink className='anchor-link' offset={50} href={`#${section}`} onClick={() => setMenuOpen(false)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </AnchorLink>
            </li>
          ))}
          <li>
            <a href='/Tarek_Ibrahim_Resume.pdf' className='anchor-link' download>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;