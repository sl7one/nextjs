import Article from "@/components/Article/Article";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

// export async function generateStaticParams(props) {
//   console.log(props)
//   const { products } = await fetch("https://dummyjson.com/products/").then(
//     res => res.json()
//   );
//   const data = products.map(({ id }: { id: string }) => ({
//     id,
//   }));

//   return data;
// }

export default async function Product({ params: { id } }: IProps) {
  const product: IProduct = await fetch(
    `https://dummyjson.com/products/${id}`,
    { cache: "no-store" }
  ).then(res => res.json());

  return <div>{<Article product={product} />}</div>;
}
