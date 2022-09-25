import { useEffect,useState } from "react"
import { Link , useParams } from "react-router-dom"

export const User = () => {
  const [user , setUser] = useState({});
  const params = useParams()
  const id = params.id;

  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{signal})
    .then(res=>res.json())
    .then(data=>{
        setUser(data);
    }).catch(err=>{
        if(err.name==="AbortError"){
          console.log("canceleed")
        }
      })
      return()=>{
        controller.abort()
    }
  },[id])

  return (
    <div>
      <p>name:{user.name}</p>
      <p>username:{user.username}</p>
      <p>email:{user.email}</p>
      <Link to="/users/1">User1</Link>
      <Link to="/users/2">User2</Link>
      <Link to="/users/3">User3</Link>
    </div>
  )
}
