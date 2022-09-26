import React from 'react'
import { useRef } from 'react'
const TargetHTMLElement = () => {
    const ref = useRef()
    const div_ref = useRef()
    return (
        <div>
            <input ref={ref} type="text"/>
            <button onClick={()=>ref.current.focus()}>Focus input</button>
            <button onClick={()=>{div_ref.current.append (ref.current.value)}}>Copy input </button>
            {/* appending must be done with state and jsx not with ref*/}
            <div ref={div_ref}>
                <h1>copied value</h1>
            </div>

        </div>
      )
}

export default TargetHTMLElement