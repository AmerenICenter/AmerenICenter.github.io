import styles from './PersonCard.module.css';

function PersonCard(props) {
  return (
    <div className={styles.card}>
      {/* <div className={styles.cardBody}> */}
      <img className={styles.cardImage} src={props.image} />
      <h2 className={props.cardTitle}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
      <button className={styles.cardButton}>About Me</button>
      {/* </div> */}
    </div>
  );
}

export default PersonCard;
