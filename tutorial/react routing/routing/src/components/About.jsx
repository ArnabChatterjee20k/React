import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useRouteMatch } from "react-router-dom"
import { Link , Switch , Route} from "react-router-dom"
import Author from "./Author"
import Authority from "./Authority"
function About({log}) {
  const his = useHistory()
  useEffect(() => {
    if (!log) return his.push("/")
  }, [])
  
  const {path , url} = useRouteMatch()
  console.log(useRouteMatch())
  return (
    <>
      <h1>About</h1>
      <li>
        <Link to={`${url}/author`}>author</Link>
      </li>
      <li>
        <Link to={`${url}/authority`}>authority</Link>
      </li>

      <Switch>
        <Route path={`${path}/author`} component={Author}/>
        <Route path={`${path}/authority`} component={Authority}/>
      </Switch>
    </>
  )
}

export default About