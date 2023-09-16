import Article from "@/components/Article/Article";
import React from "react";

// export async function generateStaticParams() {
//   const { products } = await fetch("https://dummyjson.com/products/").then(
//     res => res.json()
//   );

//   return products.map(({ title }: { title: string }) => ({
//     title: title.replace(/\s+/g, "-"),
//   }));
// }

interface IProps {
  searchParams: {
    id: string;
  };
}

export default async function Product({ searchParams: { id } }: IProps) {
  const product: IProduct = await fetch(
    `https://dummyjson.com/products/${id}`
  ).then(res => res.json());

  return (
    <div>
      <Article product={product} />
    </div>
  );
}
