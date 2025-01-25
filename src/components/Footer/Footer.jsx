import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <h2>
            List <span className={styles.highlight}>User</span>
          </h2>
        </div>
        <div className={styles.footerSocial}>
          <a href="#" aria-label="Twitter">
            T
          </a>
          <a href="#" aria-label="Pinterest">
            P
          </a>
          <a href="#" aria-label="Vimeo">
            V
          </a>
          <a href="#" aria-label="Google">
            G
          </a>
          <a href="#" aria-label="RSS">
            R
          </a>
        </div>

        <div className={styles.footerRights}>
          <p>© 2025 All Rights Reserved. Designed by Zemez.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
