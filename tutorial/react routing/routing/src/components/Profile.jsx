import { useParams } from "react-router-dom"

function Profile({match}) {
  console.log(useParams())
  return (
    <>
      <div>
        <h1>using Use Params</h1>
        id is {useParams().id}
      </div>
    </>
  )
}

export default Profile