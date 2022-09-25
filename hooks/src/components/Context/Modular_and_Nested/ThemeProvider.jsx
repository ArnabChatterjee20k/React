import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

const ThemeContext = createContext();
const UpdateThemeContext = createContext();

export function useTheme(){
    return useContext(ThemeContext)
}

export function updateTheme(){
    return useContext(UpdateThemeContext)
}


export function ThemeProvider(props){
    console.log("🚀 ~ file: ThemeProvider.jsx ~ line 18 ~ ThemeProvider ~ props", props)
    const [theme, setTheme] = useState("dark")

    function toggle(){
        theme==="dark"?setTheme("light"):setTheme("dark")
    }
    


    return(
        <ThemeContext.Provider value={theme}>
            <UpdateThemeContext.Provider value={toggle}>
                {props.children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    )
}