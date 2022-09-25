import { Children } from "./Children"
import { ThemeProvider } from "./ThemeProvider"

const ModularContextComponent = () => {
  return (
    <ThemeProvider>
      <Children/>
    </ThemeProvider>
  )
}

export default ModularContextComponent