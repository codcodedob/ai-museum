import { ReactNode } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";


const ElizaChat = dynamic(() => import("./ElizaChat"), { ssr: false });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white font-sans">
      <header className="p-4 text-center text-xl font-bold border-b border-gray-800">
        <Link href="/">Museum of Artificial Intelligence</Link>
      </header>
      <main className="p-6 max-w-6xl mx-auto space-y-8">
        {children}
        <section className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-2">💬 Talk to ELIZA (1966)</h2>
          <ElizaChat />
        </section>
      </main>
      <footer className="p-4 text-center text-xs text-gray-400 border-t border-gray-800">
        © 2025 AI Archive — A Living History of Intelligence
      </footer>
    </div>
  );
}
