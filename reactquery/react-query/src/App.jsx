import { useState , useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import React from 'react'

const Button = () => {
  const {data,error,isStale} = useQuery(["button"],()=>{
    return new Promise(resolve=>setTimeout(()=>resolve(Math.random()),5000))
  },{staleTime:2000})

  const req = useQuery(["button"],()=>{
    return Promise.resolve("23")
  })
  // if(isStale) alert("Fresh data available")
  
  console.log({data,error,isStale});
  return (
    <button>I am a button {data}</button>
  )
}

function App() {
  const [visible,setVisible] = useState(true)

  return (
    <div className="App">
      <div>
        {visible && <Button/>}
        <button onClick={()=>setVisible(prev=>!prev)}>Toggle button</button>
      </div>
    </div>
  )
}

export default App
