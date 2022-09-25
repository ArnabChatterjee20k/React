import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
        <Link to="/posts">Go to Posts</Link>
        <Link to="/users/1">User1</Link>
    </div>
  )
}
