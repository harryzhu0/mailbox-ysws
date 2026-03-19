import Link from "next/link";
import Header from "./components/Header"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header/>
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold m-2">Mailbox</h1>
        <span className="text-xl m-2">
          Build something related to Linux, get an @linux.com email
        </span>
      </div>
    </div>
  );
}
