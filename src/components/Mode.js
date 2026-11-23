
function Mode({mode,setMode}){
  return(
    <button onClick={()=>setMode(!mode)}>Mode</button>
  )
  
}

export default Mode;