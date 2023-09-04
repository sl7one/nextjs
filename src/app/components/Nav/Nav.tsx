import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center bg-emerald-600 text-base">
        <li className="p-4 cursor-pointer">
          <Link href="/home" >Home</Link>
        </li>
        <li className="p-4">
          <Link href="/about" >About</Link>
        </li>
        <li className="p-4">
          <Link href="/products/1" >Products</Link>
        </li>
      </ul>
    </nav>
  );
}
