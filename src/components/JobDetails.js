import { useState } from "react";
import { useParams } from "react-router-dom";

function JobDetails(jobs){
  const [done,setDone]=useState(false)
  const {id} =useParams();
  const job=jobs.find((job)=>job.id===Number(id))
  if(!job){
    return <p>Job not found!</p>;
  }
  function HandleApply(){
    setDone(true)
  }
  return(
    <div>
      <h1>Job Details</h1>
      <h2> {job.type}</h2>
      <p>{job.location}</p>
      <p>{job.work}</p>
      <button onClick={HandleApply} disabled={done}>Apply</button>
      {done ? <p>Applied</p>:<p>Apply now</p>}
      <p>id :{id}</p>
    </div>
  )

}

export default JobDetails;