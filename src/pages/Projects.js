import { createProjectCard } from '../components/layout/ProjectCard';
import projects from '../data/projects';
import { useEffect } from 'react';
import styles from './Projects.module.css';

function Projects() {
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
    <div className={`${styles.container} container`}>
      <h1 className='header'>Current Projects</h1>
      {projects.map(createProjectCard)}
    </div>
  );
}
export default Projects;
