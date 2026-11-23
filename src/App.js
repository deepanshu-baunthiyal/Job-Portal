import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route,NavLink, } from "react-router-dom";
import "./App.css";
import JobSearch from "./components/JobSearch";
import JobDetails from "./components/JobDetails";
import About from "./components/About";
import Login from "./components/Login";
import Help from "./components/Help";
import Contact from "./components/Contact";
import SaveJobs from "./components/Savejobs";
import Application from "./components/Application";
import Addjob from "./components/Addjob";
// import Mode from "./components/Mode";

function Portal(){
  const [savejobs,setSavejobs] =useState([]);
  const [mode,setMode]=useState(false);
  const [application,setApplication]=useState(()=>{
    const saved=localStorage.getItem("application")
    if(saved){
      console.log("Saved")
      console.log("Done")
      return JSON.parse(saved)
    }
    else{
      console.log("nothing ")
      return []
    }
  });

  useEffect(()=>{
    localStorage.setItem("application",JSON.stringify(application));
  },[application])

return(
    <BrowserRouter>
    <div className={mode ? "dark-mode":"light-mode"}>
    <div className="navbar">
    <NavLink to="/jobs">Job</NavLink>
    <NavLink to="/login" className={({isActive})=>isActive?"active":""} >Login</NavLink>
    <NavLink to="/help">Help</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/savejobs">Saved</NavLink>
    <NavLink to="/application">My Application</NavLink>
    <NavLink to="/addjob">Add job</NavLink>
    {/* <Mode mode={mode} setMode={setMode}/> */}

    </div>
   <Routes>
    <Route path="/jobs" element={<JobSearch savejobs={savejobs} setSavejobs={setSavejobs} application={application} setApplication={setApplication}/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/help" element={<Help/>}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/savejobs" element={<SaveJobs savejobs={savejobs} setSavejobs={setSavejobs}/>}></Route>
    <Route path="/jobs/:id" element={<JobDetails />}></Route>
    <Route path="/application" element={<Application application={application}/>}></Route>
    <Route path="/addjob" element={<Addjob />}></Route>
   </Routes> 
   </div>
    </BrowserRouter>
)
}

    {/* {useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users?name=Leanne`)
    .then(Response=>Response.json())
    .then(data=>{
      setJobs(data)
      console.log(data)
  })
  },[])}
    <div className="job-co
    ntainer">
      {jobs.map(job=>(
  <div key={job.id}>
    <h3>title: {job.name}</h3>
    <p>contact: {job.email}</p>
  </div>
))} */}

    

export default Portal;


// function App(){
//   const[users,setUsers]=useState([]);
//   const[loading,setLoading]=useState(true);
//   const[error,setError]=useState(false)
//   useEffect(()=>{
//     fetch("API_URL")
//     .then(Response=>Response.json())
//     .then(data=>{
//       setUsers(data)
//       setLoading(false)
//   })
//   .catch(error=>{
//     setError(true);
//     setLoading(false);
//   })
//   },[])
// return(
//   <div>
//     {error && <h2>Something went wrong</h2>}
//     {loading ?<h3>loading..</h3>: users.map(user=>(
//       <div>
//         <h3>{user.name}</h3>
//         <h4>{user.email}</h4>
//       </div>
//     ))}
//   </div>
// )
// }
// export default App;

//  useEffect(()=>{
//       const timer=setTimeout(()=>{
//       fetch(`https://dummyjson.com/products/search?q=${search}`)
//       .then(response=>response.json())
//       .then(data=>{
//         setProducts(data.products);
//       })},500);
//       return(()=>{
//       clearTimeout(timer)
//     })
//     },[search]);