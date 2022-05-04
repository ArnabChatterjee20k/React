import { useParams , useLocation} from "react-router-dom"

function Profile() {
  const query = new URLSearchParams(useLocation().pathname)
  const name = query.get("name")

  return (
    <>
      <div>
        <h1>using Use Params</h1>
        id is {useParams().id}
      </div>
      <div>
        <h1>Name using useLocation and URLSearchParams</h1>
        name is {name}
      </div>
    </>
  )
}

export default Profile