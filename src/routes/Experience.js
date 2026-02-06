import { Card, Col, Image, Row } from "react-bootstrap"
import { jobs } from "../data/jobs"

const RoleDetails = ({job: {title, company, start, end}}) => (
  <>
    <h4>{title}</h4>
    <h5 className="text-muted">{company}</h5>
    <Card.Subtitle className="mb-2 mt-0 text-muted">
      <h6>
        {(start && end)
          ? `${start} - ${end}`
          : (start || end)
        }
      </h6>
    </Card.Subtitle>
  </>
)

const RoleDetailsWithLogo = ({job}) => (
  <Row className="m-0">
    <Col className="p-0">
      <RoleDetails job={job} />
    </Col>
    <Col xs="auto" className="p-0">
      <Image
        fluid
        src={job.logo}
        alt={`${job.company} logo`}
        style={{ maxHeight: "100px", maxWidth: "100px" }}
        className="float-right"
      />
    </Col>
  </Row>
)

const JobDescription = ({job: {description}}) => {
  if (Array.isArray(description)) {
    return description.map(({highlight, detail}) => (
      <p>
        {highlight && <span className='fw-bold'>{highlight}: </span>}
        <span>{detail}</span>
      </p>
    ))
  } else {
    return description.split("\n").map(str => <p>{str}</p>)
  }
}

const Experience = () => (
  jobs.map(job => {
    const HeaderComponent = job.logo ? RoleDetailsWithLogo : RoleDetails

    return (
      <Card className="border-dark mb-2">
        <Card.Header>
          <HeaderComponent job={job} /> 
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <JobDescription job={job}/>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  })
)

export default Experience
