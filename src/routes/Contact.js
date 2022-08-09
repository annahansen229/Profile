import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Contact = () => {
  return (
    <form action="">
      <Row className="form-group">
        <label htmlFor="name" className="col-2 col-form-label">
          Name:
        </label>
        <Col>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Name"
          />
        </Col>
      </Row>
      <Row className="form-group">
        <label htmlFor="email" className="col-2 col-form-label">
          Email:
        </label>
        <Col>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="form-control"
          />
        </Col>
      </Row>
      <Row className="form-group">
        <label htmlFor="message" className="col-2 col-form-label">
          Message:
        </label>
        <Col>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="form-control"
          />
        </Col>
      </Row>

      <Row className="form-group">
        <Col>
          <Button type="submit" color="primary" className="btn-block">
            Submit
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default Contact
