import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link to='/'>Picture</Link>
        </div>
        <ul className={styles.nav}>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/people'>People</Link>
          </li>
          <li>
            <Link to='/events'>Events</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
