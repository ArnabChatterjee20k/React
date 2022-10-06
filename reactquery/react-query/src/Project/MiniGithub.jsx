import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function fetcher(repo) {
  // returning a promise
  return fetch(`https://api.github.com/repos/${repo}`).then((res) =>
    res.json()
  );
}

const MiniGithub = () => {
  const [query, setQuery] = useState("");
  const { data, error, isLoading, refetch } = useQuery(
    ["github-data", query],
    () => fetcher(query),
    { enabled: false }
  );
  console.log(
    "🚀 ~ file: MiniGithub.jsx ~ line 12 ~ MiniGithub ~ {data,error,loading}",
    { data, error, refetch }
  );
  return (
    <div>
      {/* <h2>{data?.url}</h2>
      <h2>{data?.forks_url}</h2> */}
      <input
        type="text"
        value={query}
        placeholder="enter the repo"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={()=>refetch()}>Search</button>
      {isLoading ? (
        <h2>Loading.......</h2>
      ) : (
        <>
          <h2>{data?.url}</h2>
          <h2>{data?.forks_url}</h2>
        </>
      )}
    </div>
  );
};

export default MiniGithub;
