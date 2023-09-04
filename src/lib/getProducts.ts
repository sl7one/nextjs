export const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    return data.json();
  };