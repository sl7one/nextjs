"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar/SearchBar";
import { getByQuery } from "@/API/getByQuery";
import ProductsNavigation from "@/components/ProductsNavigation/ProductsNavigation";

export default function Search() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  const [products, setProducts] = useState<IProduct[] | null >(null);

  useEffect(() => {
    const getData = async () => {
      if (!q) return;
      const { products }: { products: IProduct[] } = await getByQuery(q);
      setProducts(products);
    };
    getData();
  }, [q]);

  if (!products) return;

  return (
    <>
      <SearchBar />
      <Suspense fallback={<div>Loading ...</div>}>
        <ProductsNavigation products={products} route="products2" />
      </Suspense>
    </>
  );
}
