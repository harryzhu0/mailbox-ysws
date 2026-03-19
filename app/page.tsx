import Link from "next/link";
import Header from "./components/Header"

export default function Home() {
  return (
    <div className="min-h-screen mx-48">
      <Header/>
      <div className="flex flex-col justify-center my-48">
        <h1 className="text-5xl font-bold m-2">Mailbox</h1>
        <span className="text-xl m-2 text-left">
          Build something related to Linux, get a{" "}
          <Link
            className="text-blue-500 underline"
            href="https://docs.linuxfoundation.org/lfx/my-profile/purchases/purchasing-linux-email"
          >linux.com email</Link>
          {" "}and other stuff related to linux!
        </span>
        <Link href="https://forms.fillout.com/t/x9cpqCQi17us">
          <button className="bg-yellow-500 text-3xl px-16 py-8 m-1 rounded-md">
            RSVP
          </button>
        </Link>
      </div>
    </div>
  );
}
