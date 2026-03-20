"use client";

import { useState } from "react";

type Item = {
  id: number;
  title: string;
  description: string;
  date: string;
};

const items: Item[] = [
  { id: 1, title: "Welcome to Mailbox!", description: "Your journey starts here! Get free stuff, build, etc.", date: "Mar 20" },
  { id: 2, title: "Prizes", description: "Want a Linux.com Email? Sign up NOW!", date: "Mar 19" },
  { id: 3, title: "You ship:", description: "Cool projects related to linux!", date: "Mar 18" },
  { id: 4, title: "We ship:", description: "Lifetime emails, Blahajs, RAM, lots of stuff!", date: "Mar 17" },
];

export default function Home() {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
    <div className="flex h-screen bg-[#1a1f2b] text-gray-200">
      {/* Sidebar */}
      <nav className="w-64 bg-[#222739] p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8 text-white">Mailbox</h1>
        <button
          onClick={() => setSelected(null)}
          className={`flex items-center gap-3 p-2 rounded hover:bg-[#2c3145] transition ${selected === null ? "bg-[#2c3145]" : ""}`}
        >
          <span className="w-5 h-5 bg-gray-500 rounded inline-block" />
          Inbox
        </button>
        <button
          onClick={() => alert("Drafts clicked!")}
          className="flex items-center gap-3 p-2 rounded hover:bg-[#2c3145] transition mt-2"
        >
          <span className="w-5 h-5 bg-gray-500 rounded inline-block" />
          Drafts
        </button>
        <button
          onClick={() => alert("Archive clicked!")}
          className="flex items-center gap-3 p-2 rounded hover:bg-[#2c3145] transition mt-2"
        >
          <span className="w-5 h-5 bg-gray-500 rounded inline-block" />
          Archive
        </button>
        <button
          onClick={() => alert("Trash clicked!")}
          className="flex items-center gap-3 p-2 rounded hover:bg-[#2c3145] transition mt-auto"
        >
          <span className="w-5 h-5 bg-gray-500 rounded inline-block" />
          Trash
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="p-4 border-b border-[#2c3145] flex items-center justify-between bg-[#222739]">
          <input
            type="search"
            placeholder="Search Mailbox"
            className="bg-[#1a1f2b] rounded px-3 py-2 w-full max-w-md text-gray-300 placeholder-gray-500 focus:outline-none"
          />
          <div className="ml-4 flex gap-4">
            <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition">All</button>
            <button className="px-3 py-1 rounded hover:bg-[#3a4160] transition">Unread</button>
            <button className="px-3 py-1 rounded hover:bg-[#3a4160] transition">Pinned</button>
          </div>
        </header>

        {/* List */}
        <ul className="flex-1 overflow-y-auto">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelected(item)}
              className={`p-4 border-b border-[#2c3145] hover:bg-[#2c3145] cursor-pointer flex justify-between ${
                selected?.id === item.id ? "bg-[#2c3145]" : ""
              }`}
            >
              <div className="max-w-lg">
                <p className="font-semibold text-white truncate">{item.title}</p>
                <p className="text-gray-400 text-sm truncate">{item.description}</p>
              </div>
              <time className="text-gray-500 text-xs whitespace-nowrap">{item.date}</time>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}