export default function Home() {
  const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {greeting}
      </h1>
    </main>
  );
}
