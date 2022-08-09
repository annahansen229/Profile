import React from "react"
import { Card, Col, Row } from "react-bootstrap"

import anna from "../images/anna.png"

const About = () => {
  return (
    <Card className="border-dark mb-2">
      <Card.Header>
        <h4>Anna Hansen</h4>
        <h6 className="text-muted">M.S. in Computer Science, 2022</h6>
        <h6 className="text-muted">
          B.S. in Accounting,
          <span className="font-italic"> summa cum laude</span>, 2009
        </h6>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <img
              src={anna}
              alt="Anna Hansen"
              className="img-thumbnail float-left avatar mr-2"
              width={"200px"}
            />
            <p className="bio card-text">
              Hello, my name is Anna. I am currently working as a Full Stack
              Software Engineer. I spent the first 10 years of my professional
              career working as an accountant in tax administration for the
              State of Washington. My riveting work stories are always a big hit
              at parties.
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default About
