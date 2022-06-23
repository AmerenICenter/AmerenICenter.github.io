import styles from './JoinUs.module.css';
import { Fragment } from 'react';
import FAQ from '../../src/data/faq.js';
import { createQuestionItem } from '../components/items/QuestionItem';

function JoinUs() {
  return (
    <Fragment>
      <div class='container'>
        <h1 className='header'>Join Us</h1>
        <div className={styles.info}>
          <div className={styles.text}>
            <h2>Interested?</h2>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className={styles.links}>
              <a href='#'>Apply Here</a>
              <a href='#'>Join Us</a>
            </div>
          </div>
          <img src='https://picsum.photos/500/300'></img>
        </div>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.questions}>{FAQ.map(createQuestionItem)}</div>
      </div>
    </Fragment>
  );
}
export default JoinUs;
