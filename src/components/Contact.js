import { useState } from "react";

function Contact(){
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [state,setState]=useState(false);

function Checkemail(){
  if(email ==="" || name ===""){
       alert("Something missing!")
  }
  else{
    setState(true);
  }
}
function ResetEmail(){
  setEmail("")
  setName("")
  setState(false);
}
  return(
    <div>
      <p>contact page.</p>
      <input placeholder="name" onChange={(e)=>setName(e.target.value)} /><br></br>
      <input value={email} placeholder="email" onChange={(e)=>setEmail(e.target.value)} /><br></br>
      <input placeholder="message" /><br></br>
      <button onClick={Checkemail}>Submit</button><br></br>
      <button onClick={ResetEmail}>Reset</button>
      {state && <p>{name}</p>}
      {state && <p>{email}</p>}
    </div>
  )
  
}

export default Contact;