import { useNavigate } from "react-router-dom";

function SaveJobs({savejobs=[],setSavejobs}){
 const navigate= useNavigate();
  return(
    <div className="job-container">
      {savejobs.map(job=>(
      <div className="job-card">
      <div key={job.id}>
      <h3>Type:</h3>
      <p>{job.type}</p>

      <h3>Location:</h3>
      <p>{job.location}</p>

      <h3>Worktype:</h3>
      <p>{job.work}</p>

      <button className="apply" onClick={()=>navigate("/login")}>Apply</button>
      <button className="apply" onClick={()=>setSavejobs(previous=>previous.filter(savejobs=>savejobs.id !== job.id)) }>Delete</button>
      </div>
      </div>
      ))}
      
    </div>
  )
}

export default SaveJobs;