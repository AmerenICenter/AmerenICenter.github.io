import { createProjectCard } from '../components/layout/ProjectCard';
import projects from '../data/projects';

function Projects() {
  return (
    <div className='container'>
      <h1 className='header'>Current Projects</h1>
      {projects.map(createProjectCard)}
    </div>
  );
}
export default Projects;
