import "./ProjectDemo.css"

export default function ProjectDemo({projectTitle, projectDescription, projectImageURL, projectLivePreviewURL, projectSourceCodeURL}){
  return(<li className="project-demo" key="projectTitle">
    <div className="project-text">
      <h2 className="project-title">{projectTitle}</h2>
      <p className="project-description">{projectDescription}</p>
      <div className="link-container">
        <a href={projectLivePreviewURL} className="live-preview" target="_blank">Live Preview</a>
        <a href={projectSourceCodeURL} className="source-code" target="_blank">Source Code</a>
      </div>
    </div>
    <div className="project-image">
      <img src={projectImageURL} alt={`Screenshot ${projectTitle}`} />
    </div>
  </li>);
}