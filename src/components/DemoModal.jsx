import React, { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content s-card" onClick={(e) => e.stopPropagation()} style={{ 
        maxWidth: 500, width: "90%", padding: 48, border: "1px solid rgba(255,255,255,0.1)",
        background: "var(--carbon-gray-100)", color: "white", borderRadius: 0
      }}>
        <button className="modal-close" onClick={onClose} style={{ top: 32, right: 32 }}>
          <X size={20} color="white" />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <CheckCircle size={48} color="var(--sale-emerald)" style={{ marginBottom: 24, margin: "0 auto" }} />
            <h2 style={{ color: "white", marginBottom: 16, fontWeight: 400 }}>HANDSHAKE_SUCCESS</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>Our protocol lead will initiate contact within 24 operational hours.</p>
          </div>
        ) : (
          <>
            <div className="technical-label" style={{ marginBottom: 24 }}>Node Deployment Request</div>
            <h2 style={{ fontSize: 32, color: "white", marginBottom: 12, fontWeight: 400 }}>Request a <span style={{ color: "var(--carbon-blue-60)" }}>Demo</span>.</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 32, fontSize: 14 }}>
              Experience the high-authority platform built for industrial-tier governance.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div className="input-group">
                <label style={{ fontSize: 10, fontFamily: "var(--font-mono)", opacity: 0.5 }}>Full Name</label>
                <input type="text" placeholder="NODE_ID_ALPHA" required style={{ borderRadius: 0, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div className="input-group">
                  <label style={{ fontSize: 10, fontFamily: "var(--font-mono)", opacity: 0.5 }}>Contact No</label>
                  <input type="tel" placeholder="+91" required style={{ borderRadius: 0, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }} />
                </div>
                <div className="input-group">
                  <label style={{ fontSize: 10, fontFamily: "var(--font-mono)", opacity: 0.5 }}>Industrial Email</label>
                  <input type="email" placeholder="root@domain.com" required style={{ borderRadius: 0, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }} />
                </div>
              </div>

              <div className="input-group">
                <label style={{ fontSize: 10, fontFamily: "var(--font-mono)", opacity: 0.5 }}>Directive Summary</label>
                <textarea placeholder="Describe operational scale..." rows={3} required style={{ borderRadius: 0, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}></textarea>
              </div>

              <button type="submit" className="c-btn-blockbuster" style={{ width: "100%", justifyContent: "center", background: "var(--carbon-blue-60)" }}>
                INITIATE PROTOCOL →
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          position: relative;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-close {
          position: absolute;
          background: transparent;
          border: none;
          cursor: pointer;
          opacity: 0.4;
          transition: 0.3s;
        }
        .modal-close:hover { opacity: 1; transform: rotate(90deg); }
        .input-group { display: flex; flex-direction: column; gap: 8px; }
        .input-group input, .input-group textarea {
          padding: 14px 16px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: 0.2s;
        }
        .input-group input:focus, .input-group textarea:focus { border-color: var(--carbon-blue-60); background: rgba(255,255,255,0.05); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
