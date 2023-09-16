import { Suspense } from "react";
import React from "react";
import ProductsNavigation from "@/components/ProductsNavigation/ProductsNavigation";

export default async function Products() {
  const { products }: { products: IProduct[] } = await fetch(
    "https://dummyjson.com/products/"
  ).then(res => res.json());

  return (
    <Suspense fallback={<div> Loading ...</div>}>
      <ProductsNavigation products={products} />
    </Suspense>
  );
}
