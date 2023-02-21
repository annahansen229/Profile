import React from "react"
import { Card, Col, Row, Image } from "react-bootstrap"
import { jobs } from "../data/jobs"

const Experience = () => {
  return (
    <>
      {jobs.map((job) => {
        const role = (
          <>
            <h4>{job.title}</h4>
            <h5 className="text-muted">{job.company}</h5>
            <Card.Subtitle className="mb-2 mt-0 text-muted">
              <h6>
                {/* has start date and end date: show as range */}
                {job.start && job.end && `${job.start} - ${job.end}`}
                {/* missing start or end date: show which one exists (or show none) */}
                {!(job.start && job.end) && (job.start || job.end)}
              </h6>
            </Card.Subtitle>
          </>
        )

        const cardHeader = job.logo ? (
          <Row className="m-0">
            <Col className="p-0">{role}</Col>
            <Col xs='auto' className="p-0">
              <Image
                fluid
                src={job.logo}
                alt={`${job.company} logo`}
                style={{maxHeight:'100px', maxWidth:'100px'}}
                className='float-right'
              />
            </Col>
          </Row>
        ) : (
          role
        )

        return (
          <Card className="border-dark mb-2">
            <Card.Header>{cardHeader}</Card.Header>
            <Card.Body>
              <Card.Text>
                {/* if there are line breaks, this creates a p element for each paragraph */}
                {job.description.split("\n").map((str) => (
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

export default Experience
