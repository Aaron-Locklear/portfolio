import "./ProjectDemo.css"

export default function ProjectDemo({
  projectTitle,
  projectDescription,
  projectImageURL,
  projectLivePreviewURL,
  projectSourceCodeURL,
  className
}) {
  return (
    <li className={`project-demo ${className}`} key={projectTitle}> {/* Using the className prop */}
      <div className="project-text">
        <h2 className="project-title">{projectTitle}</h2>
        <p className="project-description">{projectDescription}</p>
        <div className="link-container">
          <a href={projectLivePreviewURL} className="live-preview" target="_blank" rel="noreferrer">Live Preview</a>
          <a href={projectSourceCodeURL} className="source-code" target="_blank" rel="noreferrer">Source Code</a>
        </div>
      </div>
      <div className="project-image">
        <img src={projectImageURL} alt={`Screenshot ${projectTitle}`} />
      </div>
    </li>
  );
}
