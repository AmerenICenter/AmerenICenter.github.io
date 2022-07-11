import { createProjectCard } from '../components/layout/ProjectCard';
import { current_projects, completed_projects } from '../data/projects';
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
      {current_projects.map(createProjectCard)}
      <h1 className='header'>Completed Projects</h1>
      {completed_projects.map(createProjectCard)}
    </div>
  );
}
export default Projects;
