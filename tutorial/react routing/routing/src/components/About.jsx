import { useEffect } from "react"
import { useHistory } from "react-router-dom"
function About({log}) {
  const his = useHistory()
  useEffect(() => {
    if (!log) return his.push("/")
  }, [])
  
  return (
    <>About</>
  )
}

export default About