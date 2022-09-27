import React, { useState } from 'react'
import List from './List';
export const Problem = () => {
    const[number,setNumber] = useState(1);
    const [dark , setDark] = useState(false);

    // this function will be created again and again if any state of this component changes
    // so every time the function will be different even if the values are same. 
    // We are not dealing with the render of List rather we are dealing with the function getting changed even if the values remain same
    const getItems = ()=>{
        // function getting build each time if any state changes
        return [number,number+1 , number+2];
    }

    const theme = {
        backgroundColor : dark?"#333":"#fff",
        color : dark?"#fff":"#333"
    }
  return (
    <div style={theme}>
        <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>setDark(prev=>!prev)}>toggle theme</button>
    <List getItems={getItems}/>

    </div>
  )
}
