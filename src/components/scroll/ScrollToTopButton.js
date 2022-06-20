import React, { useEffect, useState, Fragment } from 'react';
import { BsArrowBarUp } from 'react-icons/bs';

function ScrollToTopButton() {
  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setScrollToTopButton(true);
      } else {
        setScrollToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    // <div>
    <Fragment>
      {scrollToTopButton && (
        <button
          href='#'
          onClick={scrollUp}
          style={{
            zIndex: '10',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.7)',
            width: '30px',
            height: '30px',
            textDecoration: 'none',
          }}
        >
          <BsArrowBarUp />
        </button>
      )}
    </Fragment>
  );
}

export default ScrollToTopButton;
