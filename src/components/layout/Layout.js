import styles from './Layout.module.css';
import Nav from './Nav';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      <Nav />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
