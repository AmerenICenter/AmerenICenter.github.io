import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

function getCurrentYear() {
  return new Date().getFullYear();
}

function Footer() {
  return (
    <footer className={styles.outerFooter}>
      <div>
        <ul className={styles.links}>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
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
