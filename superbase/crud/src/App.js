import { createClient } from '@supabase/supabase-js'
import { useState , useEffect } from 'react'
function App() {
  const [Task, setTask] = useState("")
  const [Desp, setDesp] = useState("")
  const url = process.env.URL
  const key = process.env.KEY


  const supabase = createClient(url,key)
  const get_data = async () => {
    const { data, error } = await supabase
      .from("todo")
      .select("*")
      return data
  }

  const insert_data = async (todo) => {
    const { data, error } = await supabase
      .from('todo')
      .insert([
        todo
      ])
      if(data){
        setTaskItems(TaskItems.concat(todo))
      }else{
        alert("Error")
      }
  }

  const update_data = async ( id, task, desp ) => {
    console.log(id)
    const new_task = prompt("Task name",task)
    const new_desp = prompt("Description",desp)
    const { data, error } = await supabase
      .from('todo')
      .update({ task:new_task , desp:new_desp })
      .match({id:id})
      console.log(data)
      if(data){
        (TaskItems.map((todo)=>{
          if (todo.id === id){
            todo.task = new_task
            todo.desp = new_desp
          }
          return todo
        }))
      }
  }
  
  const delete_data = async (id) => {
    const { data, error } = await supabase
      .from('todo')
      .delete()
      .match( {id:id} )
      setTaskItems(TaskItems.filter((item)=>item.id!==Number.parseInt(id)))
  }

  const [TaskItems, setTaskItems] = useState([])
  
  useEffect(() => {
    get_data().then((item)=>{
      setTaskItems(item)
    })
  }, [])


  return (
    <>
    <h1>Please reload page after inserting data</h1>
      <form>
        <input placeholder='task...' value={Task} onChange={(e)=>setTask(e.target.value)}/>
        <input placeholder='description...' value={Desp} onChange={(e)=>setDesp(e.target.value)}/>
      </form>
        <button  onClick={()=>insert_data({task:Task,desp:Desp})}>create</button>
      <ul>
        {
          TaskItems.map(({id,task,desp})=>
            <li id={id} key={id}> 
              {task} {desp}
              <button id={id} onClick={(e)=>update_data(Number.parseInt(e.target.id),task,desp)}>update</button>
              <button id={id} onClick={(e)=>delete_data(e.target.id)}>delete</button>
            </li>)
        }
      </ul>
    </>
  );
}

export default App;
