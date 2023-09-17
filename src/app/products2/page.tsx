import React from "react";
import Link from "next/link";

export default async function Products() {
  const { products }: { products: IProduct[] } = await fetch(
    "https://dummyjson.com/products/"
  ).then(res => res.json());

  const items = products.map(({ id, title }: { id: string; title: string }) => (
    <li key={id}>
      <Link href={`/products2/${id}`} className="hover:text-emerald-600">
        {title}
      </Link>
    </li>
  ));

  return (
    <nav className="flex-1 mt-4">
      <ul>{items}</ul>
    </nav>
  );
}
