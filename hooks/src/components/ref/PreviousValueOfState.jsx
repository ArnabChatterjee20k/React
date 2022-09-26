import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

export const PreviousValueOfState = () => {
    const [state,setState] =  useState("");

    const prevState = useRef('')
    useEffect(() => {
        prevState.current = state // storing previous value of state when state getting changed
    }, [state])
    
  return (
    <div>
            <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
            <div>previous value {prevState.current}</div>

        </div>
  )
}
