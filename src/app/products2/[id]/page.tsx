import Article from "@/components/Article/Article";
import React, { Suspense } from "react";


interface IProps {
  params: {
    id: string;
  };
}

export default async function Product({ params: { id } }: IProps) {
  const product: IProduct = await fetch(
    `https://dummyjson.com/products/${id}`
  ).then(res => res.json());

  return <Suspense fallback={<div>Loading...</div>}>{<Article product={product} />}</Suspense>;
}
