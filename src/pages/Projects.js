import ProjectCard from '../components/layout/ProjectCard';
import projects from '../data/projects';

function createProjectCard(project) {
  return (
    <ProjectCard
      image={project.image}
      name={project.name}
      text={project.text}
    />
  );
}

function Projects() {
  return (
    <div className='container'>
      <h1>Current Projects</h1>
      {projects.map(createProjectCard)}
    </div>
  );
}
export default Projects;
