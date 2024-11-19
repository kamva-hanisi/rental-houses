import { useState } from "react";
import logo from "../../../assets/nav/Logo.png";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      <img src={logo} alt="Rent" className={styles.logo} />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About Us">About Us</a>
          </li>
          <li>
            <a href="#Houses">Houses</a>
          </li>
          <li>
            <a href="#Contact Us">Contact Us</a>
          </li>
          <li>
            <a href="#Log In">Log In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
;

export default Navbar;
