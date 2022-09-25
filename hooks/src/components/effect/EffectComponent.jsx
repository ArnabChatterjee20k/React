import DependencyArray from "./DependencyArray"
import { DataType_Effect_Dependency_Array } from "./DataType_Effect_Dependency_Array"
import CleanUpExample from "./CleanUpExample"
import CleanUpFunction from "./CleanUpFunction"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./FetchingCorrectly/Home"
import Post from "./FetchingCorrectly/Post"
import { User } from "./FetchingCorrectly/User"
const EffectComponent = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>        
          <Route exact path="posts" element={<Post/>}/>        
          <Route exact path="users/:id" element={<User/>}/>        
        </Routes>
      </BrowserRouter>
  )
}

export default EffectComponent