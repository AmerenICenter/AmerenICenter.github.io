import styles from './ProjectCard.module.css';

function createProjectCard(project) {
  return (
    <ProjectCard
      image={project.image}
      name={project.name}
      text={project.text}
      technologies={project.technologies}
      type={project.type}
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
          {props.technologies.map((data) => (
            <li>
              <div>{data}</div>
            </li>
          ))}
        </ul>
        <p class={styles.type}>{props.type}</p>
        <p>{props.text}</p>
        <a href='#'>View Project</a>
      </div>
    </div>
  );
}

export { createProjectCard };
export default ProjectCard;
