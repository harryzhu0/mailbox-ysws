"use client";

// Currently the RSVP link has not been implemented

import { useState } from "react";

type Item = {
  id: number;
  title: string;
  description: string; // HTML content
  date: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "Welcome to Mailbox!", // The description is AI idgaf anymore about ts
    description: `
      <h3 style="font-size: 20px;">Hello!</h3>
      <p>Welcome to Mailbox, the Hack Club YSWS where your passion for Linux comes alive! Here, you ship your own Linux-related projects, experiments, and ideas, and in return, we ship back curated Linux-related goodies, tools, and surprises to fuel your creativity. It’s a place where collaboration meets exploration: share what you build, discover what others have shipped, and become part of a thriving Linux-loving community. Whether it’s code, projects, or inspiration, this is the space where Linux moves both ways — from you to us, and from us to you — keeping the ecosystem alive, exciting, and endlessly rewarding!</p>
    `,
    date: "Mar 16",
  },
  {
    id: 2,
    title: "Prizes",
    description: `
      <p>Want a <strong>Linux.com Email</strong>? Sign up NOW!</p>
      <blockquote>Don't miss out!</blockquote>
    `,
    date: "Mar 17",
  },
  {
    id: 3,
    title: "What you ship:",
    description: `<p>Cool projects related to Linux!</p>`,
    date: "Mar 18",
  },
  {
    id: 4,
    title: "What we ship",
    description: `<p>Lifetime emails, Blahajs, RAM, lots of stuff!</p>`,
    date: "Mar 19",
  },
  {
    id: 5,
    title: "RSVP",
    description: `<p>Click <a href="#">here</a> to RSVP for Mailbox!</p>`,
    date: "Mar 20",
  },
];

export default function Home() {
  // Default first email selected
  const [selected, setSelected] = useState<Item>(items[0]);

  return (
    <div className="flex h-screen bg-[#1a1f2b] text-gray-200">
      {/* Sidebar */}
      <nav className="w-64 bg-[#222739] p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8 text-white">Mailbox</h1>
        <button
          onClick={() => setSelected(items[0])}
          className={`flex items-center gap-3 p-2 rounded hover:bg-[#2c3145] transition ${
            selected?.id === items[0].id ? "bg-[#2c3145]" : ""
          }`}
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
      <main className="flex-1 flex">
        {/* Email List */}
        <ul className="w-1/3 flex flex-col border-r border-[#2c3145] overflow-y-auto">
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
                {/* Show a plain-text preview in the list */}
                <p className="text-gray-400 text-sm truncate">{item.description.replace(/<[^>]+>/g, '')}</p>
              </div>
              <time className="text-gray-500 text-xs whitespace-nowrap">{item.date}</time>
            </li>
          ))}
        </ul>

        {/* Detail Panel */}
        <div className="flex-1 p-6 bg-[#1a1f2b] max-w-full overflow-y-auto space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#222739] border border-gray-700 rounded-lg p-6 shadow-sm"
            >
              {/* Title */}
              <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>

              {/* Divider */}
              <hr className="border-gray-600 mb-4" />

              {/* Content */}
              <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: item.description }} />

              {/* Actions */}
              <div className="mt-4 flex gap-3">
                <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition text-sm">Reply</button>
                <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition text-sm">Forward</button>
                <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}