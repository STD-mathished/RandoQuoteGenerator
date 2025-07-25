"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/quote");
      const data = await res.json();
      console.log(data); // ← vérifier structure
      setQuote(data.q);
      setAuthor(data.a);
    } catch (err) {
      console.error("Erreur fetch:", err);
      setQuote("Une erreur est survenue.");
      setAuthor("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      {loading ? (
        <p className="text-gray-500">Chargement...</p>
      ) : (
        <blockquote className="text-xl italic max-w-xl">
          “{quote}”
          <footer className="mt-4 text-sm font-semibold">— {author}</footer>
        </blockquote>
      )}

      <button
        onClick={fetchQuote}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Nouvelle citation
      </button>
    </main>
  );
}
