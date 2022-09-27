import React from 'react'
import { Problem } from './Problem'
import Solution from './Solution'

const CallbackComponent = () => {
  return (
    <>  
        <div>
            <div>Problem</div>
            <Problem/>
        </div>
        <hr />
        <div>
            <div>SOlution</div>
            <Solution/>
        </div>
    </>
  )
}

export default CallbackComponent