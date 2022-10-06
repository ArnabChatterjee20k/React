export function fetcher(url) {
    // returning a promise
    return fetch(url).then((res) =>
      res.json()
    );
  }
