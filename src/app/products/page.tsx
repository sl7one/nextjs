import { Suspense } from "react";
import React from "react";
import ProductsNavigation from "@/components/ProductsNavigation/ProductsNavigation";
import { getAllProducts } from "@/API/getAllProducts";
import SearchBar from "@/components/SearchBar/SearchBar";

export default async function Products() {
  const { products }: { products: IProduct[] } = await getAllProducts();

  return (
    <>
      
      <Suspense fallback={<div> Loading ...</div>}>
        <ProductsNavigation products={products} route="products" />
      </Suspense>
    </>
  );
}
