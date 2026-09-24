import { connection } from "next/server";

export default async function Home() {
  await connection(); // render per request so the date isn't frozen at build time

  const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";
  // ponytail: server timezone (UTC on Vercel), move to a client component if viewers need their local date
  const today = new Date().toLocaleDateString("en-US", { dateStyle: "full" });

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {greeting}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">{today}</p>
    </main>
  );
}
