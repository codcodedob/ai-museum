"use client";

import { useState, useEffect, useRef } from "react";
import ElizaBot from "../lib/elizabot";

export default function ElizaChat() {
  const elizaRef = useRef<any>(null);
  const [log, setLog] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    elizaRef.current = new ElizaBot();
    const initial = elizaRef.current.getInitial();
    setLog(["ELIZA: " + initial]);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    const reply = elizaRef.current.transform(input);
    setLog((prev) => [...prev, `You: ${input}`, `ELIZA: ${reply}`]);
    setInput("");
  };

  return (
    <div className="space-y-3">
      <div className="h-48 overflow-y-auto p-2 bg-gray-900 rounded border border-gray-700 text-sm">
        {log.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
          placeholder="Say something to ELIZA..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
