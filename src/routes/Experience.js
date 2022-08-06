import React from "react"
import { jobs } from "../data/jobs"

const Experience = () => {
  // create a card for each job in jobs
  return (
    <div className="container">
      {jobs.map((job) => {
        const role = (
          <>
            <h4>{job.title}</h4>
            <h5 className="text-muted">{job.company}</h5>
            <h6 className="card-subtitle mb-2 mt-0 text-muted">
              {/* has start date and end date: show as range */}
              {job.start && job.end && `${job.start} - ${job.end}`}
              {/* missing start or end date: show which one exists (or show none) */}
              {!(job.start && job.end) && (job.start || job.end)}
            </h6>
          </>
        )

        const cardHeader = job.logo ? (
          <div className="row m-0 align-items-end">
            <div className="col p-0">{role}</div>
            <img src={job.logo} alt="" className="col-2 p-0" />
          </div>
        ) : (
          role
        )

        return (
          <div className="card border-dark mb-2">
            <div className="card-header">{cardHeader}</div>
            <div className="card-body">
              <div className="card-text">
                {/* if there are line breaks, this creates a p element for each paragraph */}
                {job.description.split("\n").map((str) => (
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

export default Experience
