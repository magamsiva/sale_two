import React from "react";

export default function Footer() {
  return (
    <footer className="c-section" style={{ background: "var(--carbon-gray-10)", borderTop: "1px solid var(--carbon-border)", paddingBottom: 80, paddingTop: 100 }}>
       <div className="c-container">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 80, flexWrap: "wrap", marginBottom: 64 }}>
             {/* BRAND BLOCK */}
             <div style={{ flex: "1 1 300px" }}>
                <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginBottom: 24 }}>
                   <div style={{
                     width: 28, height: 28, background: "var(--carbon-gray-100)", borderRadius: 0,
                     display: "flex", alignItems: "center", justifyContent: "center",
                     color: "white", fontWeight: 700, fontSize: 11
                   }}>EL</div>
                   <span style={{ fontSize: 20, fontWeight: 400, color: "var(--carbon-gray-100)", letterSpacing: "-0.01em" }}>
                     EL-FRS <span style={{ color: "var(--carbon-blue-60)" }}>HMIS</span>
                   </span>
                </a>
                <p style={{ fontSize: 14, color: "var(--carbon-text-secondary)", lineHeight: 1.6, fontWeight: 400, maxWidth: 320 }}>
                   High-authority Personnel Engineering. Architecting industrial-tier workforce governance for India's operational infrastructure.
                </p>
             </div>

             {/* LINKS BLOCK */}
             <div style={{ display: "flex", gap: 40, flexWrap: "wrap", flex: "2 1 600px" }}>
                {[
                   { t: "Platform Engine", l: ["FRS Core", "Payroll Module", "Compliance Node", "Operational Hub"] },
                   { t: "Intelligence", l: ["Architecture", "Licensing", "Security Tier", "Governance"] },
                   { t: "The Entity", l: ["Deployment", "Sourcing", "Audit Ready", "Legal Hub"] }
                ].map((col, i) => (
                   <div key={i} style={{ minWidth: 160 }}>
                      <div className="technical-label" style={{ marginBottom: 20 }}>{col.t}</div>
                      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                         {col.l.map(link => (
                            <li key={link}>
                               <a href="#" style={{ fontSize: 14, color: "var(--carbon-text-secondary)", textDecoration: "none", transition: "0.2s" }} onMouseEnter={e => e.target.style.color = "var(--carbon-blue-60)"} onMouseLeave={e => e.target.style.color = "var(--carbon-text-secondary)"}>{link}</a>
                            </li>
                         ))}
                      </ul>
                   </div>
                ))}
             </div>
          </div>

          {/* LEGAL BLOCK */}
          <div style={{ borderTop: "1px solid var(--carbon-border)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
             <div style={{ fontSize: 12, color: "var(--carbon-text-secondary)", fontFamily: "var(--font-mono)" }}>[NODE.ACTIVE] © 2025 Entro Labs Pvt Ltd.</div>
             <div style={{ display: "flex", gap: 24 }}>
                {["Status", "Privacy", "Security", "Legal"].map(item => (
                   <span key={item} style={{ fontSize: 10, fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", cursor: "pointer", letterSpacing: 1.5 }} onMouseEnter={e => e.target.style.color = "var(--carbon-blue-60)"} onMouseLeave={e => e.target.style.color = "#94A3B8"}>{item}</span>
                ))}
             </div>
          </div>
       </div>
    </footer>
  );
}


