import styles from './Layout.module.css';
import Nav from './Nav';

function Layout(props) {
  return (
    <div>
      <Nav />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
