import React, { useState } from 'react'

export const ObjectUpdate = () => {
    const [input,setInput] = useState("")
    const [user, setUser] = useState({
        name:"arnab",
        email:"arnab",
        images:["profile.png","cover.png"]
    })

    const changeUser = ()=>{
        // setUser(user.name=input) // error as user.name=input is initialisation and it is not returing any value
        setUser(user=>({...user,name:input}))
    }
  return <div>
    <h2>Details</h2>
    <h2>name is {user.name}</h2>
    <input onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder='name...' />
    <button onClick={changeUser}>Change name</button>
  </div>;
}
