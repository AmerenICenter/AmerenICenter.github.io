import styles from './PersonCard.module.css';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function PersonCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className={styles.card}>
      {/* prevents background scrolling when modal is opened */}
      <Modal
        onAfterOpen={() => {
          document.body.style.top = `-${window.scrollY}px`;
          document.body.style.position = 'fixed';
        }}
        onAfterClose={() => {
          const scrollY = document.body.style.top;
          document.body.style.position = '';
          document.body.style.top = '';
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            // opacity: '0.7',
          },
          content: {
            width: '500px',
            height: '700px',
            margin: 'auto',
          },
        }}
      >
        <div className={styles.modalBody}>
          <img className={styles.cardImage} src={props.headshot} />
          <h2>{props.name}</h2>
          <p className={styles.modalTeamHeader}>{props.team}</p>
          <p>
            {props.major}: {props.graduationDate}
          </p>
          <ul className={styles.links}>
            {props.links.map((data) => (
              <li>
                <a href={Object.values(data)[0]}>{Object.keys(data)[0]}</a>
              </li>
            ))}
          </ul>
          <p className={styles.modalBiography}>{props.biography}</p>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
      <img className={styles.cardImage} src={props.headshot} />
      <h2 className={props.cardTitle}>{props.name}</h2>
      <p className={styles.description}>{props.team}</p>
      <button
        onClick={() => setModalIsOpen(true)}
        className={styles.cardButton}
      >
        About Me
      </button>
    </div>
  );
}

export default PersonCard;
