import styles from './Footer.module.css';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
  return (
    <footer className={styles.outerFooter}>
      <div>
        <ul className={styles.links}>
          <li>{/* <FontAwesomeIcon icon={faCoffee} /> */}</li>
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
        {/* <ul className={styles.links}> */}
        Copyright @ 2022 Ameren Innovation Center
      </span>
    </footer>
  );
}

export default Footer;
