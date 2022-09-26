import React, { useEffect } from 'react'
import { useState } from 'react'
import { ComponentMemoize } from './ComponentMemoize'
import { Problem } from './Problem'
import { Solution } from './Solution'

export const MemoComponent = () => {
  const [toggle,setToggle] = useState(true);
  return (
    <>
    <button onClick={()=>setToggle(!toggle)}>ReRender all{Number(toggle)}</button>
        <Problem/>
        <Solution/>
        <ComponentMemoize/>
    </>
  )
}
