import QuestionItem from '../components/items/QuestionItem';
import styles from './JoinUs.module.css';
import { Fragment } from 'react';

function JoinUs() {
  return (
    <Fragment>
      <div class='container'>
        <h1>Join Us</h1>
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
        <div className={styles.questions}>
          <QuestionItem
            question='Why is Lorem Ipsum the simply dummy text of the printing and typesetting
        industry?'
            answer='It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.'
          />
          <QuestionItem
            question='Why is Lorem Ipsum the simply dummy text of the printing and typesetting
        industry?'
            answer='It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.'
          />
          <QuestionItem
            question='Why is Lorem Ipsum the simply dummy text of the printing and typesetting
        industry?'
            answer='It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.'
          />
          <QuestionItem
            question='Why is Lorem Ipsum the simply dummy text of the printing and typesetting
        industry?'
            answer='It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.'
          />
          <QuestionItem
            question='Why is Lorem Ipsum the simply dummy text of the printing and typesetting
        industry?'
            answer='It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.'
          />
        </div>

        <div className={styles.contact}>
          <h2 className={styles.contactHeader}>Contact Us</h2>
          <ul>
            <li>Head Manager</li>
            <li>Senior Software Engineer</li>
            <li>Data Scientist</li>
            <li>Address</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
export default JoinUs;
