function Profile({match}) {
  console.log(match) // we cant use it directly in the jsx as it will give error as Objects are not valid as a React child
  return (
    <>
      <div>
        <h1>Using match prop</h1>
        Profile id={match.params.id}
      </div>
    </>
  )
}

export default Profile