import Article from "@/components/Article/Article";
import { IProduct } from "@/types/IProduct";
import React from "react";

export async function generateStaticParams() {
  const {products} = await fetch("https://dummyjson.com/products/").then(res =>
    res.json()
  );


  return products.map(({ title }: { title: string }) => ({
    title: title.replace(/\s+/g, '-'),
  }));
}

export default async function Product({
  params: { title },
}: {
  params: { title: string };
}) {
  return (
    <div>
      {/* <Article product={product} /> */}
      {title}
    </div>
  );
}
