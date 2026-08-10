"use client";

import { useState, useRef, useEffect } from "react";

export default function AiChat({ isDark }) {
  const [open, setOpen] = useState(false);
  const [bigScreen, setBigScreen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "SYS_READY: Ask me about Kurt's projects, skills, or experience. (Restricted from personal queries)",
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
          content: data.reply || "ERR_RESPONSE_FAILED: I couldn't respond.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "ERR_NETWORK: Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Dynamic Theme Colors for the Brutalist UI
  const theme = {
    buttonBg: isDark ? "bg-slate-200" : "bg-slate-900",
    buttonText: isDark ? "text-slate-950" : "text-slate-50",
    border: isDark ? "border-slate-700" : "border-slate-900",
    shadowSm: isDark
      ? "shadow-[4px_4px_0px_rgba(51,65,85,1)]"
      : "shadow-[4px_4px_0px_rgba(15,23,42,1)]",
    shadowLg: isDark
      ? "shadow-[8px_8px_0px_rgba(51,65,85,1)]"
      : "shadow-[8px_8px_0px_rgba(15,23,42,1)]",
    windowBg: isDark ? "bg-slate-950" : "bg-slate-50",
    headerBg: isDark ? "bg-slate-900" : "bg-slate-900", // Keep header dark in both modes for contrast
    headerText: isDark ? "text-slate-200" : "text-slate-50",
    userMsgBg: isDark ? "bg-slate-200" : "bg-slate-900",
    userMsgText: isDark ? "text-slate-950" : "text-slate-50",
    aiMsgBg: isDark ? "bg-slate-900" : "bg-white",
    aiMsgText: isDark ? "text-slate-200" : "text-slate-900",
    inputContainerBg: isDark ? "bg-slate-950" : "bg-white",
    inputFieldBg: isDark ? "bg-slate-800" : "bg-slate-50",
    inputText: isDark ? "text-slate-200" : "text-slate-900",
    inputPlaceholder: isDark
      ? "placeholder:text-slate-500"
      : "placeholder:text-slate-400",
    pattern: isDark
      ? "bg-[radial-gradient(circle_at_2px_2px,rgba(148,163,184,0.15)_1px,transparent_0)]"
      : "bg-[radial-gradient(circle_at_2px_2px,rgba(148,163,184,0.2)_1px,transparent_0)]",
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className={`flex items-center gap-3 rounded-xl border-2 ${theme.border} ${theme.buttonBg} px-5 py-3 text-sm font-black tracking-wide ${theme.buttonText} ${theme.shadowSm} transition-transform hover:-translate-y-1 active:translate-y-0 active:shadow-none`}
        >
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          ASK_SYS_AI
        </button>
      ) : (
        <div
          className={`flex flex-col overflow-hidden rounded-2xl border-2 ${theme.border} ${theme.windowBg} ${theme.shadowLg} transition-all duration-300
            ${
              bigScreen
                ? "fixed inset-4 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[600px] sm:h-[700px]"
                : "w-[calc(100vw-48px)] max-w-sm sm:w-[350px]"
            }`}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between border-b-2 ${theme.border} ${theme.headerBg} p-4`}
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <h2
                className={`text-xs font-mono font-bold tracking-widest ${theme.headerText} uppercase`}
              >
                SYS_ASSISTANT
              </h2>
            </div>
            <div className="flex items-center gap-4 font-mono font-bold">
              <button
                onClick={() => setBigScreen(!bigScreen)}
                className="text-slate-400 transition hover:text-emerald-400"
                title={bigScreen ? "Minimize" : "Maximize"}
              >
                {bigScreen ? "[-]" : "[+]"}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-400 transition hover:text-rose-400"
              >
                [X]
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div
            className={`relative space-y-4 overflow-y-auto p-4 ${theme.pattern} bg-[size:16px_16px] ${
              bigScreen ? "h-[calc(100vh-180px)] sm:h-[560px]" : "h-80"
            }`}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`rounded-xl border-2 ${theme.border} p-3 text-sm font-medium ${theme.shadowSm} ${
                  msg.role === "user"
                    ? `ml-auto max-w-[85%] ${theme.userMsgBg} ${theme.userMsgText}`
                    : `max-w-[85%] ${theme.aiMsgBg} ${theme.aiMsgText}`
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="mb-1 font-mono text-[10px] font-black text-slate-500">
                    AI_REPLY:
                  </div>
                )}
                {msg.content}
              </div>
            ))}

            {loading && (
              <div
                className={`max-w-[85%] rounded-xl border-2 ${theme.border} ${theme.aiMsgBg} p-3 text-sm font-bold text-slate-500 ${theme.shadowSm} animate-pulse`}
              >
                <div className="mb-1 font-mono text-[10px] font-black text-slate-500">
                  AI_STATUS:
                </div>
                Processing_Query...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            className={`flex gap-2 border-t-2 ${theme.border} ${theme.inputContainerBg} p-3`}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Enter query..."
              className={`flex-1 rounded-lg border-2 ${theme.border} ${theme.inputFieldBg} px-3 py-2 text-sm font-medium ${theme.inputText} transition-colors ${theme.inputPlaceholder} outline-none`}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className={`rounded-lg border-2 ${theme.border} ${theme.buttonBg} px-4 py-2 text-sm font-black ${theme.buttonText} ${theme.shadowSm} transition-all active:translate-y-px active:shadow-none disabled:opacity-50`}
            >
              SEND
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
