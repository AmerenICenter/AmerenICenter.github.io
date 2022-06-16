import styles from './Footer.module.css';

function getCurrentYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <footer className={styles.outerFooter}>
      <div>
        <ul className={styles.links}>
          <li>
            <a href='#'>GitHub</a>
          </li>
          <li>
            <a href='#'>YouTube</a>
          </li>
          <li>
            <a href='#'>Facebook</a>
          </li>
          <li>
            <a href='#'>Instagram</a>
          </li>
        </ul>
      </div>
      <span className={styles.bottomFooter}>
        Copyright @ {getCurrentYear()} Ameren Innovation Center
      </span>
    </footer>
  );
}

export default Footer;
