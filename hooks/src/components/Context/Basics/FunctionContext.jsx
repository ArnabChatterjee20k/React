import React from 'react'
import { ThemeContext } from './ContextComponent'

export const FunctionContext = () => {
  return (
    <ThemeContext.Consumer>
        {/* jsx inside Consumer must be a function */}
        {
            (context)=>{
                return <div>Function theme is {context?.theme}</div>
            }
        }
    </ThemeContext.Consumer>
  )
}
