import React from "react";
import { getAllProducts } from "@/API/getAllProducts";
import ProductsNavigation from "@/components/ProductsNavigation/ProductsNavigation";
import SearchBar from "@/components/SearchBar/SearchBar";

export default async function Products2() {
  const { products }: { products: IProduct[] } = await getAllProducts();


  return (
    <>
      <SearchBar />
      <nav className="flex-1 mt-4">
        <ProductsNavigation products={products} route="products2" />
      </nav>
    </>
  );
}
