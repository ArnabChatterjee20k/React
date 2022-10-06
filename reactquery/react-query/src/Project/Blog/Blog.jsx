import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetcher } from "./fetcher";
import Post from "./Post";

  
const Blog = () => {
    const {data:todos,isLoading} = useQuery(['post'],()=>fetcher(`https://jsonplaceholder.typicode.com/todos`))
    const [postID,setPostID] = useState(null)

    if(postID !== null) return <Post postId={postID} goBack={()=>setPostID(null)}/>
  if(isLoading) return <h2>Loading.....</h2>
  return (
    <div>
        {todos.map(todo=>{
            return <div><a onClick={()=>setPostID(todo.id)} key={todo.id}>{todo.title}</a></div>
        })}
    </div>
  )
}

export default Blog