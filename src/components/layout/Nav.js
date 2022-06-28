import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav id='navbar' className={`${styles.navbar}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link to='/'>
            <img id='logo' className={styles.logoImage} src='./logo.png' />
          </Link>
        </div>
        <ul className='rightSideContainer'>
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
          <li>
            <Link to='/joinus' className={styles.joinUs}>
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
