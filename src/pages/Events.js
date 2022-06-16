import { Chrono } from 'react-chrono';
import styles from './Events.module.css';

const items = [
  {
    title: 'Feb 2015',
    cardTitle: 'Ameren Innovation Center Opens',
    url: 'http://www.history.com',
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardDetailedText:
      'Men of the British Expeditionary Force (BEF) wade out to..',
    media: {
      type: 'IMAGE',
      source: {
        url: 'http://someurl/image.jpg',
      },
    },
  },
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    url: 'http://www.history.com',
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardDetailedText:
      'Men of the British Expeditionary Force (BEF) wade out to..',
    media: {
      type: 'IMAGE',
      source: {
        url: 'http://someurl/image.jpg',
      },
    },
  },
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    url: 'http://www.history.com',
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardDetailedText:
      'Men of the British Expeditionary Force (BEF) wade out to..',
    media: {
      type: 'IMAGE',
      source: {
        url: 'http://someurl/image.jpg',
      },
    },
  },
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    url: 'http://www.history.com',
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardDetailedText:
      'Men of the British Expeditionary Force (BEF) wade out to..',
    media: {
      type: 'IMAGE',
      source: {
        url: 'http://someurl/image.jpg',
      },
    },
  },
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    url: 'http://www.history.com',
    cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
    cardDetailedText:
      'Men of the British Expeditionary Force (BEF) wade out to..',
    media: {
      type: 'IMAGE',
      source: {
        url: 'http://someurl/image.jpg',
      },
    },
  },
];

function Events() {
  return (
    <div
      className={`${styles.timeline} container`}
      // style={{ width: '1000px', height: '1000px' }}
    >
      <Chrono items={items} mode='VERTICAL_ALTERNATING' />
    </div>
  );
}

export default Events;
