import React, { useEffect, useState } from 'react';
import { BsArrowBarUp } from 'react-icons/bs';
import styles from './ScrollToTopButton.module.css';

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
    <>
      {scrollToTopButton && (
        <button onClick={scrollUp} className={styles.scrollToTopButton}>
          <BsArrowBarUp />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
