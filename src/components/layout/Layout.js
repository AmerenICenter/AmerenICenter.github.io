import styles from './Layout.module.css';
import Nav from './Nav';
import Footer from './Footer';
import { Fragment } from 'react';
import ScrollToTopButton from '../scroll/ScrollToTopButton';

function Layout(props) {
  return (
    <Fragment>
      <div>
        <Nav />
        <div>{props.children}</div>
        <Footer />
      </div>
      <ScrollToTopButton />
    </Fragment>
  );
}

export default Layout;
