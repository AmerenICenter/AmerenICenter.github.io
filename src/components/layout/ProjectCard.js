import styles from './ProjectCard.module.css';

function ProjectCard() {
  return (
    <div className={styles.card}>
      <img className={styles.image} src='https://picsum.photos/536/354'></img>
      <div className={styles.info}>
        <h2>Project Name</h2>
        <ul className={styles.technologies}>
          <li>JAVASCRIPT</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <a href='#'>View Project</a>
      </div>
    </div>
  );
}

export default ProjectCard;
