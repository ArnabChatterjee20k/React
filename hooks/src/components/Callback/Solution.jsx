import React, { useState } from 'react'
import { useCallback } from 'react';
import List from './List';

const Solution = () => {
    const[number,setNumber] = useState(1);
    const [dark , setDark] = useState(false);

    const getItems = useCallback(()=>{
        // function getting build if the number is changed
        return [number,number+1 , number+2];
    },[number]) // as we are dependent on number

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

export default Solution