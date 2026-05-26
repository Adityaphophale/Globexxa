import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Send, X, AlertCircle, RefreshCw, MessageSquare, ArrowRight } from "lucide-react";
import { ChatMessage } from "../types";

interface TradeAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TradeAssistant({ isOpen, onClose }: TradeAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "assistant",
      text: "Welcome to Globexxa Global Trade Advisory Desk. I am your premium trade consultant powered by server-side AI. Ask me about custom private-label branding, APEDA agricultural policies, FSSAI compliance regulations, HS classification, or ocean container logistics out of Mundra or JNPT ports.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  if (!isOpen) return null;

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setError(null);
    const userMsg: ChatMessage = {
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setInput("");

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!response.ok) {
        throw new Error("Could not connect to the B2B Trade Assistant. Checked connection parameters.");
      }

      const data = await response.json();
      
      const assistantMsg: ChatMessage = {
        sender: "assistant",
        text: data.text || "I was unable to analyze your trade inquiry. Please contact our desk directly at info@globexxa.com for customized assistance.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to communicate with our server.");
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = [
    "What certificates are required to export Spices?",
    "Suggest HS code for Aged Basmati Rice",
    "What is the private-label MOQ for White Sugar?",
    "Explain FOB and CIF incoterms for Indian ports"
  ];

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-115 bg-deep-charcoal border-l border-sky-blue/20 z-50 shadow-2xl flex flex-col transition-all duration-300 transform animate-slide-in">
      {/* Header */}
      <div className="p-4 bg-primary-navy border-b border-sky-blue/20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded bg-royal-blue/30 text-sky-blue">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
              Trade &amp; Compliance Advisory Desk
            </h3>
            <span className="text-[10px] text-sky-blue uppercase tracking-wider font-semibold">
              Advising Global Sourcing Standards
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-deep-charcoal">
        {messages.map((m, index) => (
          <div
            key={index}
            className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.sender === "user"
                  ? "bg-royal-blue text-white rounded-tr-none"
                  : "bg-primary-navy/80 text-gray-200 border border-sky-blue/15 rounded-tl-none"
              }`}
            >
              {m.text.split("\n").map((para, pIdx) => (
                <p key={pIdx} className={pIdx > 0 ? "mt-2" : ""}>
                  {para}
                </p>
              ))}
            </div>
            <span className="text-[9px] text-gray-400 mt-1 px-1 font-mono">
              {m.timestamp}
            </span>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-sky-blue text-xs font-mono py-1">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Consulting Indian Export Rules database...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-xs flex gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Desk Offline Check</p>
              <p>{error}</p>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggestion Prompts */}
      <div className="p-3 bg-primary-navy/40 border-t border-sky-blue/10">
        <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold block mb-2">
          Suggested Consultation Questions:
        </span>
        <div className="grid grid-cols-2 gap-2">
          {sampleQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="text-left text-xs text-sky-blue hover:text-white bg-royal-blue/10 hover:bg-royal-blue/35 border border-sky-blue/10 p-2 rounded transition text-ellipsis overflow-hidden whitespace-nowrap"
              disabled={isLoading}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
        className="p-4 bg-primary-navy border-t border-sky-blue/20"
      >
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about HS codes, certificates, custom packing..."
            className="w-full bg-deep-charcoal border border-sky-blue/20 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-blue/40"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 p-2 rounded-full bg-gradient-to-tr from-gold-bright to-royal-blue text-white hover:opacity-90 disabled:opacity-50 transition"
            disabled={!input.trim() || isLoading}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[9px] text-gray-400 text-center mt-2 font-mono">
          Private advisory connection is traceable &amp; secure. Standard FDA &amp; APEDA standards apply.
        </p>
      </form>
    </div>
  );
}
