import styles from './JoinUs.module.css';
import FAQ from '../../src/data/faq.js';
import { createQuestionItem } from '../components/items/QuestionItem';
import { useEffect } from 'react';

function JoinUs() {
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
    <>
      <div class='container'>
        <h1 className='header'>Join Us</h1>
        <div className={styles.info}>
          <div className={styles.text}>
            <h2>Interested?</h2>
            <p>
              We would love to have you join our team at Research Park. Please
              fill out the form below to receive more info about opportunities.
              We hire University of Illinois students ranging from freshman to
              Ph.D. students. All majors are accepted.
            </p>
            <div className={styles.links}>
              <a target='_blank' href='https://forms.office.com/r/eByChq0W85'>
                Interest Form
              </a>
              <a href='#'>Apply Here</a>
            </div>
          </div>
          <img src='https://picsum.photos/500/300'></img>
        </div>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.questions}>{FAQ.map(createQuestionItem)}</div>
      </div>
    </>
  );
}
export default JoinUs;
