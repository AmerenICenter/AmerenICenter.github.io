import { Chrono } from 'react-chrono';
import styles from './Events.module.css';
import events from '../../src/data/events';

function Events() {
  const mode = 'VERTICAL_ALTERNATING';

  return (
    <div className={`${styles.timeline} container`}>
      <h1 className='header'>Events</h1>
      <Chrono items={events} mode={mode} theme={{
        primary: 'green',
        secondary: 'green',
        cardBgColor: 'white',
        cardForeColor: 'black',
        titleColor: 'black',
        titleColorActive: 'white',
        cardTitle: 'black'
      }}/>
    </div>
  );
}

export default Events;
