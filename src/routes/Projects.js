import React from "react"
import { projects } from "../data/projects"
import { Link45deg } from "react-bootstrap-icons"

const Projects = () => {
  console.log(projects)
  return (
    <div className="container">
      {projects.map((project) => {
        return (
          <div className="card border-dark mb-2">
            <div className="card-header">
              <h4>
                <a href={project.url} className="project text-dark">
                  {project.title}
                  <Link45deg />
                </a>
              </h4>
              <h5 className="text-muted">
                {project.languages && (
                  <>Languages: {project.languages.join()}</>
                )}
              </h5>
              <h6 className="text-muted">
                {project.frameworks && (
                  <>Libraries/Frameworks: {project.frameworks.join()}</>
                )}
              </h6>
            </div>
            <div className="card-body">
              <div className="card-text">
                {project.description.split("\n").map((str) => (
                  <p>{str}</p>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Projects
