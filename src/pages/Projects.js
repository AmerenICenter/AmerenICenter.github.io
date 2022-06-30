import { createProjectCard } from '../components/layout/ProjectCard';
import projects from '../data/projects';
import { useEffect } from 'react';

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
    <div className='container'>
      <h1 className='header'>Current Projects</h1>
      {projects.map(createProjectCard)}
    </div>
  );
}
export default Projects;
