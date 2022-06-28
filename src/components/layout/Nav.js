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
          <li className='secretHome'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/projects'>
              Projects
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/people'>
              People
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/events'>
              Events
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/joinus'>
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
