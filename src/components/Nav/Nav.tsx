import Link from "next/link";
import React from "react";

export default function Nav() {
  const routes = [
    { route: "/home", name: "Home" },
    { route: "/about", name: "About" },
    { route: "/products", name: "Products" },
    { route: "/products2", name: "Products2" },
    { route: "/search", name: "search" },
  ];

  const items = routes.map(({ route, name }) => (
    <li key={name} className="p-4 cursor-pointer">
      <Link href={route}>{name}</Link>
    </li>
  ));

  return (
    <nav>
      <ul className="flex justify-center bg-emerald-600 text-base">{items}</ul>
    </nav>
  );
}
