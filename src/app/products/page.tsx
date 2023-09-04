import { Suspense } from "react";

import { getProducts } from "@/lib/getProducts";
import { IProduct } from "@/types/IProduct";
import React from "react";
import ProductsNavigation from "../components/ProductsNavigation/ProductsNavigation";

export default async function Products() {
  const { products }: { products: IProduct[] } = await getProducts();
  return (
    <Suspense fallback={<div> Loading ...</div>}>
      <ProductsNavigation products={products} />
    </Suspense>
  );
}
