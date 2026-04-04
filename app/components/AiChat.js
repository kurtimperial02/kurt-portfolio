"use client";

import { useState, useRef, useEffect } from "react";

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [bigScreen, setBigScreen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi — ask me about Kurt's projects, skills, or experience. No personal questions please, I will get fired :)",
    },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    const currentInput = input;
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Sorry, I couldn't respond.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-cyan-500 px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-cyan-400"
        >
          Ask Kurt AI
        </button>
      ) : (
        <div
          className={`rounded-2xl border border-white/10 bg-slate-900 shadow-2xl transition-all duration-300
            ${
              bigScreen
                ? "fixed inset-2 w-auto h-auto sm:relative sm:inset-auto sm:w-[600px] sm:h-[700px]"
                : "w-[calc(100vw-40px)] max-w-sm sm:w-80"
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-3">
            <h2 className="text-sm font-semibold text-white">AI Assistant</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBigScreen(!bigScreen)}
                className="text-sm text-slate-400 hover:text-white transition"
                title={bigScreen ? "Smaller screen" : "Bigger screen"}
              >
                {bigScreen ? "🗗" : "🗖"}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-sm text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            className={`space-y-3 overflow-y-auto p-3 ${
              bigScreen ? "h-[calc(100vh-160px)] sm:h-[580px]" : "h-72 sm:h-80"
            }`}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`rounded-xl p-3 text-sm ${
                  msg.role === "user"
                    ? "ml-auto max-w-[85%] bg-cyan-500 text-black"
                    : "max-w-[85%] bg-white/10 text-white"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="max-w-[85%] rounded-xl bg-white/10 p-3 text-sm text-white animate-pulse">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t border-white/10 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask about projects or skills..."
              className="flex-1 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="rounded-lg bg-cyan-500 px-3 py-2 text-sm font-medium text-black transition hover:bg-cyan-400 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
