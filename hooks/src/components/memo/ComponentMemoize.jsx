import React, { useEffect } from 'react'
import { useState } from 'react'

export const ComponentMemoize = React.memo(() => {
    console.log("fetching")
    const [posts,setPosts] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(posts=>posts.json())
      .then(posts=>setPosts(posts))
    }, [])
    
  return (
    <>
        <div>ComponentMemoize</div>
    </>
  )
})
