"use client";

import { useState } from "react";

type Reply = {
  id: number;
  content: string; // HTML content
  date: string;
  attachments?: { name: string; size: string; url: string }[];
};

type Item = {
  id: number;
  title: string;
  description: string; // HTML content
  date: string;
  attachments?: { name: string; size: string; url: string }[];
  replies?: Reply[];
};

const items: Item[] = [
  {
    id: 1,
    title: "Welcome to Mailbox!",
    description: `
      <h3 style="font-size: 20px">Hello!</h3> <br>
      <p>
      This is Mailbox, a Hack Club YSWS where you ship Linux and we ship Linux! If more clarification is helpful: You ship linux-related stuff (Runs on Linux is not linux related) and we ship back stuff like: @linux.com emails, Blahaj, RAM, <etc className="!"></etc>
      <br><br>
      We hope you have fun!
      <br><br>
      Yours Sincerily,
      <br><br>
      <b>The Mailbox Team</b>
      </p>
      `,
    date: "Mar 16",
    attachments: [
      { name: "WelcomeGuide.pdf", size: "1.2MB", url: "#" },
      { name: "GettingStarted.zip", size: "4.3MB", url: "#" },
    ],
    replies: [
      {
        id: 101,
        content: `<p>Lorem Ipsum</p>`,
        date: "Mar 16, 3:45 PM",
      },
      {
        id: 102,
        content: `<p>Lorem Ipsum</p>`,
        date: "Mar 16, 6:7 PM",
        attachments: [
          { name: "ProjectIdeas.docx", size: "850KB", url: "#" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Prizes",
    description: `<p>Want a <strong>Linux.com Email</strong>? Sign up NOW!</p>`,
    date: "Mar 17",
  },
];

export default function Home() {
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

      {/* Middle Email List - wider */}
      <section className="w-2/5 flex flex-col border-r border-[#2c3145] overflow-y-auto">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className={`flex items-center gap-3 p-4 rounded hover:bg-[#2c3145] transition border-b border-[#2c3145] text-left ${
              selected.id === item.id ? "bg-[#2c3145]" : ""
            }`}
          >
            <span className="w-5 h-5 bg-gray-500 rounded inline-block" />
            <div className="truncate flex-1">
              <p className="font-semibold text-white truncate">{item.title}</p>
              <p className="text-gray-400 text-sm truncate" dangerouslySetInnerHTML={{ __html: item.description.replace(/<[^>]+>/g, '') }} />
            </div>
            <time className="text-gray-500 text-xs whitespace-nowrap">{item.date}</time>
          </button>
        ))}
      </section>

      {/* Detail Panel */}
      <main className="flex-1 p-6 bg-[#1a1f2b] overflow-y-auto max-w-full space-y-6">
        <section className="bg-[#222739] border border-gray-700 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-white mb-1">{selected.title}</h2>
          <time className="text-gray-400 text-sm mb-4 block">{selected.date}</time>
          <hr className="border-gray-600 mb-4" />
          <div
            className="prose prose-invert max-w-full"
            dangerouslySetInnerHTML={{ __html: selected.description }}
          />
          {selected.attachments && selected.attachments.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {selected.attachments.map((att, i) => (
                <a
                  key={i}
                  href={att.url}
                  download
                  className="bg-[#2c3145] px-3 py-1 rounded hover:bg-[#3a4160] text-sm text-gray-300"
                >
                  {att.name} ({att.size})
                </a>
              ))}
            </div>
          )}
          <div className="mt-6 flex gap-3">
            <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition text-sm">Reply</button>
            <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition text-sm">Forward</button>
            <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition text-sm">Delete</button>
          </div>
        </section>

        {selected.replies?.map((reply) => (
          <section
            key={reply.id}
            className="bg-[#1a2233] border border-gray-600 rounded-lg p-4 shadow-sm"
          >
            <time className="text-gray-400 text-xs mb-2 block">{reply.date}</time>
            <div
              className="prose prose-invert max-w-full"
              dangerouslySetInnerHTML={{ __html: reply.content }}
            />
            {reply.attachments && reply.attachments.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3">
                {reply.attachments.map((att, i) => (
                  <a
                    key={i}
                    href={att.url}
                    download
                    className="bg-[#2c3145] px-3 py-1 rounded hover:bg-[#3a4160] text-sm text-gray-300"
                  >
                    {att.name} ({att.size})
                  </a>
                ))}
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}