import React from 'react'
import { useState , useMemo } from 'react'

function slowFunction(n){
    console.log("calling slow function")
    for (let index = 0; index < 400000000; index++) {}
    return n*2;
}

export const Solution = () => {
    // while interacting with any of the ui will cause rerender and due to that slowFunction will get called and we will see the delay
    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)

    // basically to solve the problem we are caching the number. If number doesnot change we will not be running the slowFunction
    const doubleNumber = useMemo(()=>{
        return slowFunction(number)
    },[number])
    
    const themeStyle = {
        backgroundColor : dark?"black":"white",
        color:dark?"white":"black"
    }
  return (
    <>
        <h1>Solution using usememo</h1>
        <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
        <button onClick={()=>setDark(prev=>!prev)}>change Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
    </>
  )
}
