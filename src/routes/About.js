import React from "react"

import anna from "../images/anna.png"

const About = () => {
  return (
    <div className="about container">
      <div className="card border-dark mb-2">
        <div className="card-header">
          <h4>Anna Hansen</h4>

          <h6 className="text-muted">M.S. in Computer Science, 2022</h6>
          <h6 className="text-muted">
            B.S. in Accounting,
            <span className="font-italic"> summa cum laude</span>, 2009
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <img
                src={anna}
                alt="Anna Hansen"
                className="img-thumbnail float-left avatar mr-2"
              />
              <p className="bio card-text">
                Hello, my name is Anna. I am currently working as a Full Stack
                Software Engineer. I spent the first 10 years of my professional
                career working as an accountant in tax administration for the
                State of Washington. My riveting work stories are always a big
                hit at parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
