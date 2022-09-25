import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ContextComponent'

export const UseContextHook = () => {
    const themeContext = useContext(ThemeContext)
    return (
    <div>useContext hook theme is {themeContext.theme}</div>
  )
}
