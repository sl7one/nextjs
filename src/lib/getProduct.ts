export const getProduct = async (id:string) => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    return data.json();
  };