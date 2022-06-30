import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function Nav() {
  return (
    <nav id='navbar' className={`${styles.navbar}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <NavLink to='/'>
            <img
              onClick={scrollUp}
              id='logo'
              className={styles.logoImage}
              src='./logo.png'
              alt='logo'
            />
          </NavLink>
        </div>
        <ul className='rightSideContainer'>
          <li className='secretHome'>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.linkActive} nav-link` : `nav-link`
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.linkActive} nav-link` : `nav-link`
              }
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/projects'
              className={({ isActive }) =>
                isActive ? `${styles.linkActive} nav-link` : `nav-link`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.linkActive} nav-link` : `nav-link`
              }
              to='/people'
            >
              People
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.linkActive} nav-link` : `nav-link`
              }
              to='/events'
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.linkActive} nav-link` : `nav-link`
              }
              to='/joinus'
            >
              Join Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
