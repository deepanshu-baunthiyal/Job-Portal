import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

function JobSearch({savejobs,setSavejobs,application,setApplication}){
const [search,setSearch]=useState("");
const [find,setFind]=useState("");
const [work,setWork]=useState("");
const [apply,setApplied]=useState(false);
const [jobs,setJobs]=useState([]);

let filterjob=jobs.filter(job=>
  (search===""||job.type.includes(search)) &&
  (find==="" || job.location.includes(find)) &&
  (work==="" || job.work.includes(work)))
  const navigate=useNavigate();

// const[jobs,setJobs]=useState([])
function HandleApply(job){
    fetch("http://localhost:5000/application",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(job)
    })
    .then(response=>response.text())
    .then(data=>{
      console.log(data)
     
    })

  // navigate("/login")
  setApplied(true);
  setApplication(previous=>{
    if(previous.some(application=>application.id === job.id)){
      alert("You already applied!")
      return previous

    }
    else{
      return [...previous,job]
    }
  })
}
useEffect(()=>{
    fetch("http://localhost:5000/jobs")
    .then(response=>response.json())
    .then(job=>{
      setJobs(job)
      console.log(job)
})
},[])

  return(
 <div className="main-div">
      <div className="search-container">
      <input className="search-bar" placeholder="Search job" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
      <select className="select-city" value={find} onChange={(e)=>setFind(e.target.value)}>
       <option value="">All Locations</option>
       <option value="Bangalore">Bangalore</option>
       <option value="Chandigarh">Chandigarh</option>
       <option value="Dehradun">Dehradun</option>
       <option value="Delhi">Delhi</option>
       <option value="Gurgaon">Gurgaon</option>
       <option value="Hyderabad">Hyderabad</option>
       <option value="Jaipur">Jaipur</option>
       <option value="Mumbai">Mumbai</option>
       <option value="Noida">Noida</option>
       <option value="Pune">Pune</option>
      </select>
      <select className="work-type" value={work} onChange={(e)=>setWork(e.target.value)}>
        <option value="">Work type</option>
        <option value="Remote">Remote</option>
        <option value="Offline">Offline</option>
      </select>
    </div> 
    <div className="job-container ">
   {filterjob==0 ? "No jobs found":filterjob.map(job=>(
      <div className="job-card">
      <h3>Type:</h3>
      <p>{job.type}</p>

      <h3>Location:</h3>
      <p>{job.location}</p>

      <h3>Worktype:</h3>
      <p>{job.work}</p>

      <button value={apply} className="apply" onClick={()=>HandleApply(job)}>Apply</button>
      <button onClick={()=>setSavejobs((previous)=>{
        if(previous.some(savejobs=>savejobs.id === job.id)){
        return previous}
      else{
        return [...previous,job]
      }})}>Save</button>
      </div>
    ))}
    </div>
  </div>
)
}

export default JobSearch;