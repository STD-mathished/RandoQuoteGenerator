// app/page.tsx ou pages/index.js
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <blockquote className="text-center text-xl italic max-w-xl">
        “{quote}”
        <footer className="mt-4 text-sm font-semibold">— {author}</footer>
      </blockquote>

      <button
        onClick={fetchQuote}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Nouvelle citation
      </button>
    </main>
  );
}
