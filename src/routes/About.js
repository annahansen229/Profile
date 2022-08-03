import React from "react"

import anna from "../images/anna.png"

const About = () => {
  return (
    <div className="about container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <img
            src={anna}
            alt="Anna Hansen"
            className="img-thumbnail img-fluid avatar"
          />
        </div>
        <div className="row">
          <div className="col">
            <p className="bio">
              Hello, my name is Anna and I am a graduate student at Portland
              State University, majoring in Computer Science. I spent the first
              10 years of my professional career working as an accountant in tax
              administration for the State of Washington. My riveting work
              stories are always a big hit at parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
