import { useState } from "react"

function Addjob(){
  const [Jobid,setJobid]=useState("")
  const [Type,setType]=useState("")
  const [Work,setWork]=useState("")
  const [Location,setLocation]=useState("")

  function SubmitJob(e){
    e.preventDefault();
    const newJobs={
    id:Jobid,
    type:Type,
    work:Work,
    location:Location
  }
    fetch("http://localhost:5000/jobs",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(newJobs)
    })
    alert("form submitted")
    console.log("Submitted")

}
  return(
    <div className="login">
    <h4>Add new job</h4>
    <form onSubmit={SubmitJob}>
      <input type="number" value={Jobid} onChange={(e)=>setJobid(e.target.value)}placeholder="Job id"/>
      <input type="text" value={Type} onChange={(e)=>setType(e.target.value) }placeholder="Job type"/>
      <input type="text" value={Work} onChange={(e)=>setWork(e.target.value)}placeholder="Job work"/>
      <input type="text" value={Location} onChange={(e)=>setLocation(e.target.value)}placeholder="Location"/>
      <button type="submit" className="savedata">Add</button>
      </form>
    </div>
  )
}

export default Addjob;