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
            color: 'orange',
            width: '50%',
            height: '50%',
            margin: 'auto',
            // opacity: '1.0',
          },
        }}
      >
        <h2>{props.name}</h2>
        <p>Modal body</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
      <img className={styles.cardImage} src={props.image} />
      <h2 className={props.cardTitle}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
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
