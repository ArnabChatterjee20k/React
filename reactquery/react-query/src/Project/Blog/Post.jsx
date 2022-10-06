import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./fetcher";
const Post = ({ postId, goBack }) => {
  const { data, isLoading } = useQuery(["post", postId], () =>
    fetcher(`https://jsonplaceholder.typicode.com/todos/${postId}`)
  );
  if (isLoading) return <h2>Loading.........</h2>;
  return (
    <div>
      <a href="#" onClick={goBack}>
        Go back
      </a>
      <div>
        <p>Active id - {postId}</p>
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default Post;
