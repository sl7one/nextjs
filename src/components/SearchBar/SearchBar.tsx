"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-4 bg-slate-100 p-4 rounded-xl border-slate-500 border ">
      <input
        type="text"
        className="p-2 rounded-xl m-auto block outline-0 border border-slate-300"
        onChange={({ target: { value } }) => setQuery(value)}
      />
      <button className="bg-sky-400 p-4 rounded-xl text-white font-semibold m-auto block mt-4">
        Search
      </button>
    </form>
  );
}
