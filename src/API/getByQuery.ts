export const getByQuery = (q: string) => {
  return fetch(`https://dummyjson.com/products/search?q=${q}`).then(r =>
    r.json()
  );
};
