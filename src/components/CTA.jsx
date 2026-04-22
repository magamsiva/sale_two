import React from "react";

export default function CTA() {
  return (
    <section className="c-section" style={{ background: "#FFFFFF", overflow: "hidden" }}>
       <div className="c-container">
          <div className="wow-reveal" style={{ 
            padding: "120px 80px", textAlign: "center", background: "var(--sale-navy)", color: "white",
            backgroundImage: "radial-gradient(circle at 100% 0%, rgba(15, 98, 254, 0.15) 0%, transparent 40%), radial-gradient(circle at 0% 100%, rgba(255, 107, 0, 0.15) 0%, transparent 40%)",
            borderRadius: "48px", position: "relative", overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 80px 160px -30px rgba(6, 11, 40, 0.6)"
          }}>
             <div className="technical-label" style={{ background: "rgba(255,255,255,0.08)", color: "#FFFFFF", marginBottom: 32 }}>Final Transformation</div>
             <h2 style={{ fontSize: "clamp(48px, 8vw, 100px)", color: "white", marginBottom: 32, maxWidth: 1000, margin: "0 auto 32px" }}>
                Architect Your Enterprise <span className="g-text">Success Now.</span>
             </h2>
             <p style={{ fontSize: 22, color: "rgba(255,255,255,0.7)", marginBottom: 64, maxWidth: 800, margin: "0 auto 64px", lineHeight: 1.6, fontWeight: 400 }}>
                Stop fighting legacy processes. Deploy the high-authority OS built for India’s fastest-growing enterprises.
             </p>

             <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
                <button className="c-btn-blockbuster">Start Your 14-Day Free Trial</button>
                <button style={{ 
                  background: "transparent", border: "2px solid rgba(255,255,255,0.3)", color: "white", 
                  padding: "22px 52px", borderRadius: 16, fontSize: 17, fontWeight: 800, cursor: "pointer", 
                  transition: "0.4s", textTransform: "uppercase", letterSpacing: 1
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "white"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                >Inquire for Scale</button>
             </div>

             {/* Persuasive Proof */}
             <div style={{ marginTop: 64, display: "flex", gap: 32, justifyContent: "center", alignItems: "center", flexWrap: "wrap", opacity: 0.5 }}>
                {["NO CREDIT CARD", "INSTANT DEPLOY", "COMPLIANCE READY"].map((text, i) => (
                  <div key={i} style={{ fontSize: 13, fontWeight: 900, letterSpacing: 2 }}>{text}</div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}
