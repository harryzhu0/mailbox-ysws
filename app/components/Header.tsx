import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row dark:bg-zinc-900 p-2 m-2 rounded-md items-center">
      <Link className="font-bold text-xl m-4" href="/">Mailbox YSWS</Link>
      <Link className="m-2" href="/">Home</Link>
      <Link className="m-2" href="https://forms.fillout.com/t/x9cpqCQi17us" target="_blank">RSVP</Link>
      <Link className="m-2" href="https://hackclub.enterprise.slack.com/archives/C0AETGSGK6U" target="_blank">Slack</Link>
    </header>
  );
}
