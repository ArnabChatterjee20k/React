import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

export const TrackRender = () => {
    const [state,setState] =  useState("");
    const [renderCount,setRenderCount] = useState(0);
    const refRenderCount = useRef(1);

    // using useeffect and state
    /* useEffect(()=>{
        setRenderCount(prev=>prev+1);
    },[state]) */

    // using useref and useeffect
    useEffect(() => {
        refRenderCount.current +=1;
    })
    
  return (
    <div>
        <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
        <div>render count = {refRenderCount.current}</div>
    </div>
  )
}
