
function Application({application,setApplication}){
    return(
      <div>
        <h3>My Application</h3>
        <div className="job-container">
        {application.map(job=>(
          <div className="job-card">
          <div key={job.id}>
          <h6>{job.type}</h6>
          <h6>{job.location}</h6>
          <h6>{job.work}</h6>
          </div>
          </div>
        ))}
      </div>
      </div>
    )
}

export default Application;