import Nav from './Nav';
import Footer from './Footer';
import ScrollToTopButton from '../scroll/ScrollToTopButton';

function Layout(props) {
  return (
    <>
      <div>
        <Nav />
        <div>{props.children}</div>
        <Footer />
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default Layout;
