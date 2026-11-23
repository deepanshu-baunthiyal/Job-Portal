import { useState ,useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Login(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [show,setShow]=useState(false)
  const [store,setSaved]=useState("")
  const [submit,setSubmit]=useState(false)

  const navigate=useNavigate();

  function HandleReset(){
    setName("")
    setEmail("")
    setPassword("")
    setSubmit(false)    
  }

    useEffect(()=>{
      const savedName=localStorage.getItem("name")
       setSaved(savedName)
      },[])
  // The challenge I mentioned: saved name appears automatically after refresh, without clicking View Data.
  function SaveData(){
      localStorage.setItem("name",name)
      console.log("Yes data was store")
    }
  function ViewData(){
    // const savedName=localStorage.getItem("name")
    // setSaved(savedName)
    setShow(true)
    console.log(store)
  }
  async function HandleSubmit(){
    // if(name==="" || email==="" || password===""){
    //   setSubmit(false)
    //   alert("Fill all requirements!")
    // }
    if(name===""){
      alert("Fill the name!")
    }
    else if(email==="" || !email.includes("@gmail.com")){
      alert("Fill the email!")
    }

    else if(password==="" || password.length <= 6 ){
      alert("Fill the password!")
    }
    else{
      setSubmit(true)
      try{
      const response =await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:name,
            email:email
        })
      })
    if(!response.ok){
      throw new Error("Request failed!")
    }
          const data= await response.json()
          console.log(data.message)
    }
      catch(error){
        alert("Something want wrong!")
        console.log(error.message)
      }

     setTimeout(()=>{
        navigate("/jobs")
     },1500)
      
    }
  }
  return(
    <div className="login">
      <h4>Name</h4>
      <input className="name" value={name} placeholder="name" onChange={(e)=>setName(e.target.value)}/><br></br>
      <h4>Email</h4>
      <input className="email" value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
      <h4>Password</h4>
      <input className="password" value={password} type="password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
      <button className="submit" onClick={HandleSubmit}>Submit</button>
      <button className="reset" onClick={HandleReset}>Reset</button>
      <button className="savedata" onClick={SaveData}>Save name</button>
      <button className="viewdata"onClick={ViewData}>Password</button>
      {submit ? <h4>Successfully Submited</h4>:""}
      {show && <p>{password}</p>}
      
    </div>
    )

}

export default Login;