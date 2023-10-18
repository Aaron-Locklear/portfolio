import ProjectDemo from '../ProjectDemo/ProjectDemo';
import { projectList } from './projectsList';
import './Projects.css';

export default function Projects() {
  const projectElements = projectList.map((project, index) => (
    <ProjectDemo
      key={project.title + index}
      projectTitle={project.title}
      projectDescription={project.description}
      projectImageURL={project.imageURL}
      projectLivePreviewURL={project.livePreviewURL}
      projectSourceCodeURL={project.sourceCodeURL}
      className={index % 2 === 1 ? 'reverse' : 'regular'}
    />
  ));

  return (
    <section className="project-section">
      <ul className="projects-holder">{projectElements}</ul>
    </section>
  );
}
