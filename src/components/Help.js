import { useState ,useRef} from "react";

function Help(){
  const [error,setError]=useState("")
    const [source,setSource]=useState([])
    const [loading,setLoading]=useState(true)
    const [users,setUsers]=useState({});
    const controllerRef = useRef(null)

//     useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response=>response.json())
//   .then(data=>{
//     setSource(data)
//     setLoading(false)
//   })
// .catch((error=>{
//   setError("Something was wrong")
//   setLoading(false)
//   console.log("Something wrong")
// }))
// },[]);

async function Practice(){
    setLoading(true)
    setError("")
    const controller=new AbortController();
    controllerRef.current=controller;
    // controllerRef.current=new AbortController()
    try{
      await new Promise(resolve=>setTimeout(resolve ,3000));
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"POST",
      headers: {
      "Content-Type":"application/json"
  },
  body:JSON.stringify({
        title:"My React Practice",
        body:"I am learning POST requests",
        userId:1
  }),
  signal:controller.signal
  // signal:controllerRef.current.signal
})
  if(!response.ok){
    throw new Error("Failed to Fetch data")
  }
const data= await response.json()
setUsers(data)
setLoading(false)
}
catch(error){
  setLoading(false)
  if(error.name !== "AbortError")
    setError(error.message)
}
  }
  function HandleCancel(){
     controllerRef.current?.abort();

//   if(controller.current){
//  controllerRef.current.abort();
//  controllerRef.current=null;
//   }
}
return(
    <div>
      <h1>help center</h1>
      {/* {loading ? "Loading..": error!==""?error:source.map((user)=>(
        <div key={user.id}>
        <h4>Name: {user.username}</h4>
        <h4> name:{user.name}</h4>
        <h5>Email: {user.email}</h5>
        <h5>Id: {user.id}</h5>
        </div>
      ))} */}
    <button onClick={Practice}>Api</button><br></br>
    <button onClick={HandleCancel}>Cancel</button>
      {loading ?"loading.." :error!==""?error:
    <div>
     <h4>Title: {users.title}</h4>
    <h4>Body: {users.body}</h4>
    <h4>UserId: {users.userId}</h4>
    <h4>Id: {users.id}</h4>
    </div>}

    </div>
  )
}

export default Help;