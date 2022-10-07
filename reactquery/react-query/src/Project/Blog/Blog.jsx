import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetcher } from "./fetcher";
import { client } from "../../query-client";
import Post from "./Post";

const Blog = () => {
  const { data: todos, isLoading } = useQuery(
    ["post"],
    () => fetcher(`https://jsonplaceholder.typicode.com/todos`),
    { select: (result) => result.slice(0, 5) , staleTime:Infinity}
  );
  const [postID, setPostID] = useState(null);
  const [id, setId] = useState(1);

  function setTitle(id) {
    // make sure that stale time is set to infinity in Post.jsx so that when we go to post for 2nd time it does not start refetching.
    console.log(id);
    console.log(client.getQueriesData(["post", id]));
    client.setQueryData(["post", id], (prev) => {
      if (prev) return { ...prev, title: "Hlo hei bte" };
    });

    // replace all the post with the id post
    client.setQueryData(["post"], (prev) => {
      if (prev){
        return prev.filter((e)=>e.id===id)
      };
    });
  }

  if (postID !== null)
    return <Post postId={postID} goBack={() => setPostID(null)} />;
  if (isLoading) return <h2>Loading.....</h2>;
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setTitle(Number.parseInt(id))}>
        Change title
      </button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {client.getQueryData(["post", todo.id]) ? <b>visited - </b> : null}
            <a onClick={() => setPostID(todo.id)}>{todo.title}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
