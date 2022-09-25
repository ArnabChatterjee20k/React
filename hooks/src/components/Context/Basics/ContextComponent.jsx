import { useState } from "react"
import { createContext } from "react"
import { ClassContext } from "./ClassContext";
import { FunctionContext } from "./FunctionContext";
import { UseContextHook } from "./UseContextHook";
export const ThemeContext = createContext();

export default function ContextComponent ()  {
    const [theme, setTheme] = useState("dark")
    
    function toggle(){
        theme==="dark"?setTheme("light"):setTheme("dark")
    }

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        {/* since we are passing multiple values to children so we are passing an object.
            if we want to send only one value then value={theme}
        */}
        {/* all the child has access to the value */}
        <FunctionContext/>
        <ClassContext/>
        <UseContextHook/>
        <button onClick={toggle}>Toggle</button>
    </ThemeContext.Provider>
  )
}