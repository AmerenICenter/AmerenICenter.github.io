import { Chrono } from 'react-chrono';
import styles from './Events.module.css';
import events from '../../src/data/events';
import { useEffect } from 'react';

function Events() {
  const mode = 'VERTICAL_ALTERNATING';

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  return (
    <div className={`${styles.timeline} container`}>
      <h1 className='header'>Events</h1>
      <Chrono
        items={events}
        mode={mode}
        theme={{
          primary: '#218737',
          secondary: '#218737',
          cardBgColor: 'white',
          cardForeColor: 'black',
          titleColor: 'black',
          titleColorActive: 'white',
        }}
      />
    </div>
  );
}

export default Events;
