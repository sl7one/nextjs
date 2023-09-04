import Article from "@/app/components/Article/Article";
import { getProduct } from "@/lib/getProduct";
import { IProduct } from "@/types/IProduct";
import React from "react";

export default async function Product({
  params: { id },
}: {
  params: { id: string };
}) {
  const product: IProduct = await getProduct(id);
  return (
      <Article product={product} />
  );
}
