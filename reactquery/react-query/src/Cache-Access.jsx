import React from "react";
import { client } from "./query-client";

const CacheAccess = () => {
  return (
    <button
      onClick={() =>
        console.log(
          console.log(
            "🚀 ~ file: Cache-Access.jsx ~ line 6 ~ CacheAccess ~ client.getQueryData();",
            // client.getQueryData()
            client.getQueryData(["post"]),
            client.getQueryData(["post",4])
          )
        )
      }
    >
      Cache-Access
    </button>
  );
};

export default CacheAccess;
