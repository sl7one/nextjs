import Link from "next/link";
import React from "react";

export default function ProductsNavigation({
  products,
  route,
}: {
  products: IProduct[];
  route: string;
}) {
  const items = products.map(({ id, title }: { id: string; title: string }) => (
    <li key={id}>
      <Link href={`/${route}/${id}`} className="hover:text-emerald-600">
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
