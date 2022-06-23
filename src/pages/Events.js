import { Chrono } from 'react-chrono';
import styles from './Events.module.css';
import events from '../../src/data/events';

function Events() {
  const mode = 'VERTICAL_ALTERNATING';

  return (
    <div className={`${styles.timeline} container`}>
      <h1 className='header'>Events</h1>
      <Chrono items={events} mode={mode} />
    </div>
  );
}

export default Events;
