import React from "react"
import { projects } from "../data/projects"
import { Link45deg } from "react-bootstrap-icons"
import { Card } from "react-bootstrap"

const Projects = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <Card className="border-dark mb-2">
            <Card.Header>
              <h4>
                <a href={project.url} className="project text-dark">
                  {project.title}
                  <Link45deg />
                </a>
              </h4>
              <h5 className="text-muted">
                {project.languages && (
                  <>Languages: {project.languages.join(", ")}</>
                )}
              </h5>
              <h6 className="text-muted">
                {project.frameworks && (
                  <>Libraries/Frameworks: {project.frameworks.join(", ")}</>
                )}
              </h6>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                {project.description.split("\n").map((str) => (
                  <p>{str}</p>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}

export default Projects
