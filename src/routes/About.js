import React from "react"
import { Card, Col, Row } from "react-bootstrap"

import CardDeck from '../components/CardDeck'

import Anna from "../images/Anna.jpg"
import skills from "../data/skills.json"
import languages from "../data/languages.json"
import libraries from "../data/libraries.json"

const About = () => (
  <Card className="border-dark mb-2">
    <Card.Header>
      <h4>Anna Hansen</h4>
      <h6 className="text-muted">
        M.S. in Computer Science, {" "}
        <a href="https://www.pdx.edu/computer-science/cybersecurity">Cybersecurity Certificate</a>
        , 2023
      </h6>
      <h6 className="text-muted">
        B.S. in Accounting,
        <span className="font-italic"> summa cum laude</span>, 2009
      </h6>
    </Card.Header>
    <Card.Body>
      <Row>
        <Col xs="auto">
          <img
            src={Anna}
            alt="Anna Hansen"
            className="img-thumbnail float-left avatar mr-2"
            width={"300px"}
          />
        </Col>
        <Col>
          <p>Hello, my name is Anna.</p>
          <p>
            I am currently working as a Full Stack Software Engineer at Dark
            Matter Software.
          </p>
          <p>
            While earning my Master's in Computer Science from Portland State
            University, I studied a broad range of topics including
            Programming Languages, Cloud Computing, Security, and Database
            Management.
          </p>
          <p>
            I take a special interest in writing clean, maintainable, testable
            code, regardless of the language I am working in. I love the
            challenge of refactoring code that is difficult to read and
            understand, and enjoy the elegance of the functional style.
          </p>
          <p>
            I spent the first 11 years of my professional career working as an
            accountant and custom software developer in tax administration for
            the State of Washington Department of Revenue.
          </p>
          <p>
            In my free time I enjoy gardening, roller skating, and
            volunteering.
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <CardDeck title="Languages" data={languages} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <CardDeck title="Libraries/Frameworks" data={libraries} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck title="Skills" data={skills} />
        </Col>
      </Row>
    </Card.Body>
  </Card>
)

export default About
