import { useEffect } from "react";
import { useState } from "react"

export default function Post() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    let isCancelled = false;
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then((data)=>{
      if(!isCancelled){
        alert("Posts received......")
        setPosts(data)
      }
    })
    
    return()=>{
      isCancelled = true;
    }
  },[]);

  return (
    <div>
      <h1>Hellow</h1>
      {
        posts?.map(p=>(
        <p key={p.id}>{p.title}</p>
        ))
      }
    </div>
  )
}
