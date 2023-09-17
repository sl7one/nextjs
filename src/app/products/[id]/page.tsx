import { getProduct } from "@/API/getProduct";
import Article from "@/components/Article/Article";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const { products } = await fetch("https://dummyjson.com/products/").then(
    res => res.json()
  );
  const data = products.map(({ id }: { id: string }) => ({
    id: id.toString(),
  }));

  return data;
}

export default async function Product({ params: { id } }: IProps) {
  const product: IProduct = await getProduct(id);

  return <div>{<Article product={product} />}</div>;
}
