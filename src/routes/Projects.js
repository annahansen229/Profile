import { Card, Image } from "react-bootstrap"
import { projects } from "../data/projects"
import ghLogo from "../images/GitHub_Invertocat_Black.png"

const Projects = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <Card className="border-dark mb-2">
            <Card.Header >
              <h4>
                {project.url ? 
                  <a href={project.url} className="project text-dark">
                    {project.title}
                  </a>
                  : <>{project.title}</>}
                
                {project.repoUrl && 
                  <a href={project.repoUrl} className="float-end">
                    <Image
                      src={ghLogo}
                      style={{width: 24, height: 24}}
                      
                    />
                  </a>
                }
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
