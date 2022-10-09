import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { client } from "../../query-client";

const fetcherPost =(url,body)=> fetch(url,{
    method:"POST",
    body:JSON.stringify(body),
    headers:{
        "Content-Type":"application/json"
    }
})

const fetcherGet = (url)=>fetch(url).then(data=>data.json())
const Todo = () => {
    const [title,setTitle] = useState("")
    const [desp,setDesp] = useState("")

    // data returned by the queryFunction is always some json data not a promise
    const {data:todos,error , isLoading,isError} = useQuery(["todo"],()=>fetcherGet("http://localhost:3000/todos"),{refetchInterval:null,staleTime:200000})

    const mutation = useMutation((body)=>fetcherPost("http://localhost:3000/todos",body),{
        onSuccess:()=>{
            // to refetch data automatically
            client.invalidateQueries(["todo"])
        }
    })

    function dataPost(){
        mutation.mutate({title,description:desp})
    }
    if(error) alert("error")
  return (
    <>
      <h3>Todo</h3>
      <form style={{display:"flex",flexDirection:"column",gap:10}}>
        <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder="description" value={desp} onChange={(e)=>setDesp(e.target.value)}/>
      </form>
      <button onClick={dataPost}>Submit</button>
      <hr />
        <h2>Todos</h2>
      <ul>
        {
            isError && <h2>Error........</h2>
        }
        {isLoading && <h2>Loading......</h2>} 
        {!isError && !isLoading && todos.map(todo=>{
            // {console.log(todo)}
            return <li key={todo.id}>{todo.id} - {todo.title} - {todo.description}</li>
        })}
      </ul>
    </>
  );
};

export default Todo;
