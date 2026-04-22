import React, { useState } from "react";
import { MessageSquare, X, Send, Bot, User, ChevronRight } from "lucide-react";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Elite-Tier Intelligence Hub active. How can I assist with your workforce architecture today?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessages = [...messages, { role: "user", text: inputValue }];
    setMessages(newMessages);
    setInputValue("");
    
    // Simple automated response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", text: "Analyzing personnel nodes... Logic processing: High-authority governance protocol active. Deployment verify: SUCCESS." }]);
    }, 1000);
  };

  return (
    <>
      {/* FLOATING ACTION BUTTON */}
      <button 
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed", bottom: 32, right: 32, width: 64, height: 64,
          background: "var(--carbon-blue-60)", color: "white", borderRadius: "50%",
          display: isOpen ? "none" : "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 12px 24px rgba(15, 98, 254, 0.3)", zIndex: 1000, border: "none", cursor: "pointer",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1) rotate(5deg)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        <MessageSquare size={28} />
      </button>

      {/* CHAT INTERFACE AREA */}
      <div style={{
        position: "fixed", bottom: 32, right: 32, width: 400, height: 600,
        background: "white", borderRadius: 16, overflow: "hidden",
        boxShadow: "0 40px 80px rgba(0,0,0,0.15)", zIndex: 1001,
        display: isOpen ? "flex" : "none", flexDirection: "column",
        border: "1px solid var(--carbon-border)",
        fontFamily: "var(--font-sans)"
      }}>
        {/* HEADER */}
        <div style={{ padding: "24px 32px", background: "var(--carbon-gray-100)", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 10, height: 10, background: "var(--sale-emerald)", borderRadius: "50%", boxShadow: "0 0 10px var(--sale-emerald)" }} />
            <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase" }}>AI Intelligence Hub</span>
          </div>
          <button onClick={() => setIsOpen(false)} style={{ background: "transparent", border: "none", color: "white", cursor: "pointer", padding: 4 }}>
            <X size={20} />
          </button>
        </div>

        {/* MESSAGES AREA */}
        <div style={{ flex: 1, padding: 24, overflowY: "auto", display: "flex", flexDirection: "column", gap: 20, background: "var(--carbon-gray-10)" }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 12, flexDirection: m.role === "user" ? "row-reverse" : "row" }}>
              <div style={{ 
                width: 32, height: 32, borderRadius: 8, background: m.role === "assistant" ? "var(--carbon-blue-60)" : "var(--carbon-gray-100)",
                display: "flex", alignItems: "center", justifyContent: "center", color: "white"
              }}>
                {m.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div style={{ 
                maxWidth: "80%", padding: 16, borderRadius: 12, fontSize: 14, lineHeight: 1.5,
                background: m.role === "assistant" ? "white" : "var(--carbon-gray-100)",
                color: m.role === "assistant" ? "#161616" : "white",
                border: m.role === "assistant" ? "1px solid var(--carbon-border)" : "none",
                boxShadow: m.role === "assistant" ? "0 4px 12px rgba(0,0,0,0.05)" : "none"
              }}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT AREA */}
        <div style={{ padding: 24, background: "white", borderTop: "1px solid var(--carbon-border)" }}>
          <div style={{ position: "relative" }}>
            <input 
              type="text" 
              placeholder="Query the system..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                width: "100%", padding: "16px 20px", paddingRight: 56,
                background: "var(--carbon-gray-10)", border: "1px solid var(--carbon-gray-20)",
                borderRadius: 12, outline: "none", fontSize: 14, fontFamily: "var(--font-mono)"
              }}
            />
            <button 
              onClick={handleSend}
              style={{
                position: "absolute", right: 8, top: 8, width: 40, height: 40,
                background: "var(--carbon-blue-60)", color: "white", borderRadius: 8,
                border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
              }}
            >
              <Send size={18} />
            </button>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
             {["Verify Stats", "Audit Logs"].map(tag => (
               <button key={tag} style={{ 
                 fontSize: 10, fontWeight: 800, padding: "6px 12px", borderRadius: 6,
                 background: "rgba(15, 98, 254, 0.05)", color: "var(--carbon-blue-60)", 
                 border: "1px solid rgba(15, 98, 254, 0.1)", cursor: "pointer"
               }}>
                 {tag}
               </button>
             ))}
          </div>
        </div>
      </div>
    </>
  );
}
