import React from "react"
import { jobs } from "../data/jobs"

const PreviousWork = () => {
  // create a card for each job in jobs
  return (
    <div className="previous-work container">
      {jobs.map((job) => {
        return (
          <div className="card my-2">
            <h5 className="card-header">{job.title}</h5>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                {/* has start date and end date: show as range */}
                {job.start && job.end && `${job.start} - ${job.end}`}
                {/* missing start or end date: show which one exists (or show none) */}
                {!(job.start && job.end) && (job.start || job.end)}
              </h6>
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

export default PreviousWork
