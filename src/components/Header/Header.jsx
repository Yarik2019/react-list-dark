import { useContext, useState } from "react";
import { ThemeContext, themes } from "../../contexts/ThemeContext";
import Toggle from "../Toggle/Toggle";
import styles from "./Header.module.css";
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };
  return (
    <header className={styles.header}>
      <div className={styles.containerHeader}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoText}>
            List<span className={styles.logoHighlight}>User</span>
          </span>
        </a>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={`${styles.navLink} ${styles.active}`}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Typography
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <div className={styles.toggleContainer}>
            <Toggle
              toggleTheme={handleThemeToggle}
              value={theme === themes.dark}
              ariaLabel="Toggle dark mode"
            />
          </div>
          <button className={styles.burger} onClick={toggleMenu}>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
