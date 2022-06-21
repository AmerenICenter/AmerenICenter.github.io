import styles from './ProjectCard.module.css';

function createProjectCard(project) {
  return (
    <ProjectCard
      image={project.image}
      name={project.name}
      text={project.text}
    />
  );
}

function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.image}></img>
      <div className={styles.info}>
        <h2>{props.name}</h2>
        <ul className={styles.technologies}>
          <li>JAVASCRIPT</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <p>{props.text}</p>
        <a href='#'>View Project</a>
      </div>
    </div>
  );
}

export { createProjectCard };
export default ProjectCard;
