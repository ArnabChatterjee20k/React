import React, { Component } from 'react'
import { ThemeContext } from './ContextComponent'

export  class ClassContext extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {/* here we can access the context using function having those values as arguments*/}
        {
            (context)=>{
                // we are receiving an object of context values.
                return <div>Class Component theme is {context?.theme}</div>
            }
        }
      </ThemeContext.Consumer>
    )
  }
}

